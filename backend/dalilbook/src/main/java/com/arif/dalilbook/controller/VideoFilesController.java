package com.arif.dalilbook.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/video")
public class VideoFilesController {

    @PostMapping("/upload")
    public ResponseEntity<Map<String, Object>> uploadVideo(@RequestParam("file") MultipartFile file) throws Exception {
        // Save video to temporary location
        File tempFile = File.createTempFile("upload_", ".mp4");
        file.transferTo(tempFile);

        // Generate thumbnails using FFmpeg
        List<String> thumbnails = generateThumbnails(tempFile);

        Map<String, Object> response = new HashMap<>();
        response.put("thumbnails", thumbnails);
        response.put("ok","good");
        return ResponseEntity.ok(response);
    }
    private void cleanTempDirectory(File tempDir) {
        File[] files = tempDir.listFiles((dir, name) -> name.startsWith("thumb_"));
        if (files != null) {
            for (File f : files) {
                if (f.isFile()) {
                    f.delete();
                }
            }
        }
    }
    private List<String> generateThumbnails(File videoFile) throws Exception {
        List<String> thumbs = new ArrayList<>();

        String outputDir = System.getProperty("java.io.tmpdir");
        for (int i = 1; i <= 3; i++) { // get 3 frames at 1s, 3s, 5s
            String outputFilePath = outputDir +File.separator +"thumb_" + i + ".png";
            ProcessBuilder pb = new ProcessBuilder(
                    "ffmpeg",
                    "-ss", String.valueOf(i * 2),
                    "-i", videoFile.getAbsolutePath(),
                    "-frames:v", "1",
                    "-q:v", "2",
                    outputFilePath
            );

            pb.inheritIO();
            Process process = pb.start();
            process.waitFor();
            thumbs.add("data:image/png;base64," + encodeBase64(new File(outputFilePath)));
        }

        return thumbs;
    }

    private String encodeBase64(File file) throws IOException {
        return Base64.getEncoder().encodeToString(Files.readAllBytes(file.toPath()));
    }
}