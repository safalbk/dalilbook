package com.arif.dalilbook.controller;


import com.arif.dalilbook.dto.NoteRequestDto;
import com.arif.dalilbook.dto.NoteResponseDto;
import com.arif.dalilbook.service.NoteService;
import jakarta.validation.Valid;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import software.amazon.awssdk.services.s3.endpoints.internal.Value;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/note")
public class NoteController {
    private final NoteService noteService;

    public NoteController(NoteService noteService){
        this.noteService = noteService;

    }

    @GetMapping
    public ResponseEntity<List<NoteResponseDto>> getNotes(@RequestParam(required = false, defaultValue = "1") int pageNo,
                                                          @RequestParam(required = false, defaultValue = "10") int pageSize,
                                                          @RequestParam(required = false, defaultValue = "id") String sortBy,
                                                          @RequestParam(required = false, defaultValue = "ASC") String sortDir,
                                                          @RequestParam(required = false) String search){
        Sort sort =null;
        if(sortDir.equalsIgnoreCase("ASC") ){
            sort =Sort.by(sortBy).ascending();
        }else {
            sort =Sort.by(sortBy).descending();
        }
        return ResponseEntity.ok().body(noteService.getNotes(PageRequest.of(pageNo-1,pageSize,sort),search));
    }

    @GetMapping("/{id}")
    public ResponseEntity<NoteResponseDto> getNoteById(  @PathVariable String id){
        return ResponseEntity.ok().body(noteService.getNoteByID(id));
    }

    @PostMapping
    public ResponseEntity<NoteResponseDto> createNotes( @RequestBody NoteRequestDto noteRequestDto){
        return ResponseEntity.ok().body(noteService.createNote(noteRequestDto));

    }

    @PutMapping("/{id}")
    public ResponseEntity<NoteResponseDto> updateNote(@PathVariable String id,@Valid  @RequestBody NoteRequestDto noteRequestDto){
        return ResponseEntity.ok().body(noteService.updateNote(id,noteRequestDto));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteNote(@PathVariable String id) {
        Map<String, String> response =new HashMap<>();
        try
        {
            noteService.deleteNote(id);
            response.put("status","deleted");
            return ResponseEntity.ok(response); // 204 No Content
        }catch (RuntimeException e){
            response.put("status","not found");
            return ResponseEntity.ok(response); // 204 No Content
        }



    }


}
