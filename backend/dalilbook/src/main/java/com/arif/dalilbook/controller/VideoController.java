package com.arif.dalilbook.controller;

import com.arif.dalilbook.dto.VideoRequestDto;
import com.arif.dalilbook.dto.VideoResponseDto;
import com.arif.dalilbook.service.VideoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/videoapi")
public class VideoController {

    private final  VideoService videoService;

    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }

    @GetMapping("all")
    public ResponseEntity<List<VideoResponseDto>> getVideos() {

        return ResponseEntity.ok().body(videoService.getVideos());

    }

    @PostMapping("create")
    public ResponseEntity<VideoResponseDto> createVideo(@Valid @RequestBody VideoRequestDto videoRequestDto){

        return ResponseEntity.ok().body(videoService.createVideo(videoRequestDto));
    }
}