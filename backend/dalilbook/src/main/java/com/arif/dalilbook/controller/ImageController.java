package com.arif.dalilbook.controller;

import com.arif.dalilbook.dto.*;
import com.arif.dalilbook.service.ImageService;
import jakarta.validation.Valid;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/image")
public class ImageController {
    private final ImageService imageService;

    ImageController(ImageService imageService){
        this.imageService = imageService;
    }


    @GetMapping
    public ResponseEntity<List<ImageResponseDto>> getIimages(@RequestParam(required = false, defaultValue = "1") int pageNo,
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
        return ResponseEntity.ok().body(imageService.getImages(PageRequest.of(pageNo-1,pageSize,sort),search));
    }

    @GetMapping("/{id}")
    ResponseEntity<ImageResponseDto> getImageById(@PathVariable String id){
        ImageResponseDto imageResponseDto = imageService.getImageById(id);
        return ResponseEntity.ok().body(imageResponseDto);
    }


    @PostMapping("/create")
    public ResponseEntity<ImageResponseDto> createVideo(
            @Valid @RequestBody ImageRequestDto imageRequestDto) {

        return ResponseEntity.ok(imageService.createImage(imageRequestDto));
    }



    @PutMapping("/{id}")
    public ResponseEntity<ImageResponseDto> updateNote(@PathVariable String id,@Valid  @RequestBody ImageRequestDto imageRequestDto){
        return ResponseEntity.ok().body(imageService.updateImage(id,imageRequestDto));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteImage(@PathVariable String id) {
        Map<String, String> response =new HashMap<>();
        try
        {
            imageService.deleteImage(id);
            response.put("status","deleted");
            return ResponseEntity.ok(response); // 204 No Content
        }catch (RuntimeException e){
            response.put("status","not found");
            return ResponseEntity.ok(response); // 204 No Content
        }

    }


}
