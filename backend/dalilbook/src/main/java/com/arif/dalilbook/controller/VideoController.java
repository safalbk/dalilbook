package com.arif.dalilbook.controller;

import com.arif.dalilbook.dto.VideoRequestDto;
import com.arif.dalilbook.dto.VideoResponseDto;
import com.arif.dalilbook.service.S3Service;
import com.arif.dalilbook.service.VideoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Objects;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/videoapi")
public class VideoController {

    private final S3Service s3Service;
    private final  VideoService videoService;

    public VideoController(VideoService videoService,S3Service s3Service) {
        this.videoService = videoService;
        this.s3Service =s3Service;
    }

    @GetMapping("all")
    public ResponseEntity<List<VideoResponseDto>> getVideos() {

        return ResponseEntity.ok().body(videoService.getVideos());

    }

    @PostMapping("/create")
    public ResponseEntity<VideoResponseDto> createVideo(
            @Valid @RequestPart("data") VideoRequestDto videoRequestDto,
            @RequestPart("file") MultipartFile file) throws IOException {

        String randomFileName = s3Service.generateRandomFileName(Objects.requireNonNull(file.getOriginalFilename()));
        String key = "images/" + randomFileName;

        s3Service.uploadFile(file, key);
        videoRequestDto.setUrl(s3Service.getFileUrl(key));

        return ResponseEntity.ok(videoService.createVideo(videoRequestDto));
    }

}