package com.arif.dalilbook.controller;

import com.arif.dalilbook.dto.VideoRequestDto;
import com.arif.dalilbook.dto.VideoResponseDto;
import com.arif.dalilbook.service.S3Service;
import com.arif.dalilbook.service.VideoService;
import jakarta.validation.Valid;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.services.s3.endpoints.internal.Value;

import java.io.IOException;
import java.util.List;
import java.util.Objects;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/videoapi")
public class VideoController {

    private final S3Service s3Service;
    private final VideoService videoService;

    public VideoController(VideoService videoService, S3Service s3Service) {
        this.videoService = videoService;
        this.s3Service = s3Service;
    }

    @GetMapping("all")
    public ResponseEntity<List<VideoResponseDto>> getVideos(@RequestParam(required = false, defaultValue = "1") int pageNo,
                                                            @RequestParam(required = false, defaultValue = "10") int pageSize,
                                                            @RequestParam(required = false, defaultValue = "id") String sortBy,
                                                            @RequestParam(required = false, defaultValue = "ASC") String sortDir,
                                                            @RequestParam(required = false) String search
                                                            ) {
        Sort sort =null;
        if(sortDir.equalsIgnoreCase("ASC") ){
            sort =Sort.by(sortBy).ascending();
        }else {
            sort =Sort.by(sortBy).descending();
        }
        return ResponseEntity.ok().body(videoService.getVideos(PageRequest.of(pageNo-1,pageSize,sort),search));

    }
    @GetMapping("/{id}")
    public ResponseEntity<VideoResponseDto> getVideosByID( @PathVariable String id) {

        return ResponseEntity.ok().body(videoService.getVideoById(id));

    }

    @PostMapping("/createvideofile")
    public ResponseEntity<VideoResponseDto> createVideoWithFile(
            @Valid @RequestPart("data") VideoRequestDto videoRequestDto,
            @RequestPart("file") MultipartFile file) throws IOException {

        String randomFileName = s3Service.generateRandomFileName(Objects.requireNonNull(file.getOriginalFilename()));
        String key = "images/" + randomFileName;

        s3Service.uploadFile(file, key);
        videoRequestDto.setUrl(s3Service.getFileUrl(key));

        return ResponseEntity.ok(videoService.createVideo(videoRequestDto));
    }


    @PostMapping("/create")
    public ResponseEntity<VideoResponseDto> createVideo(
            @Valid @RequestBody VideoRequestDto videoRequestDto) {

        return ResponseEntity.ok(videoService.createVideo(videoRequestDto));
    }


}