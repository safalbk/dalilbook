package com.arif.dalilbook.controller;

import com.arif.dalilbook.service.S3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class S3Controller {
    @Autowired
    private S3Service s3Service;

    @GetMapping("/presign")
    public ResponseEntity<String> getPresignedUrl(@RequestParam String filename) {
        String url = s3Service.generatePresignedUrl(filename);
        return ResponseEntity.ok(url);
    }

    @PostMapping("/upload")
    public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file) throws IOException, IOException {
        String randomFileName = s3Service.generateRandomFileName(Objects.requireNonNull(file.getOriginalFilename()));
        String key = "uploads/" + randomFileName;

        s3Service.uploadFile(file,key);
        return ResponseEntity.ok("File uploaded successfully!");
    }

    @GetMapping("/download/{filename}")
    public ResponseEntity<byte[]> download(@PathVariable String filename) {
        byte[] data = s3Service.downloadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename)
                .body(data);
    }
    @PostMapping("/uploadimage")
    public String uploadImage(@RequestParam("thumbnail") MultipartFile file) {
        System.out.println("Received: " + file.getOriginalFilename());
        return "Uploaded!";
    }


}