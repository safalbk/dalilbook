package com.arif.dalilbook.controller;


import com.arif.dalilbook.dto.NoteRequestDto;
import com.arif.dalilbook.dto.NoteResponseDto;
import com.arif.dalilbook.service.NoteService;
import jakarta.validation.Valid;
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
    public ResponseEntity<List<NoteResponseDto>> getNotes(){
        return ResponseEntity.ok().body(noteService.getNotes());
    }

    @PostMapping
    public ResponseEntity<NoteResponseDto> createNotes(@Valid @RequestBody NoteRequestDto noteRequestDto){
        return ResponseEntity.ok().body(noteService.createNote(noteRequestDto));

    }

    @PutMapping("/{id}")
    public ResponseEntity<NoteResponseDto> updateNote(@Valid @PathVariable String id, @RequestBody NoteRequestDto noteRequestDto){
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
