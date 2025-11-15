package com.arif.dalilbook.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.ResponseBytes;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

@Service
public class S3Service {

    @Autowired
    private S3Client s3Client;

    @Autowired
    private S3Presigner presigner;


    @Value("${aws.bucket.name}")
    private String bucketName;

    public void uploadFile(MultipartFile file, String key) throws IOException {
        s3Client.putObject(PutObjectRequest.builder()
                        .bucket(bucketName)
                        .key(key)
                        .build(),
                RequestBody.fromBytes(file.getBytes())
        );
    }

    public byte[] downloadFile(String key) {
        ResponseBytes<GetObjectResponse> objectAsBytes =
                s3Client.getObjectAsBytes(GetObjectRequest.builder()
                        .bucket(bucketName)
                        .key(key)
                        .build());

        return objectAsBytes.asByteArray();


    }

    public String getFileUrl(String fileName) {
        return "https://" + bucketName + ".s3.amazonaws.com/" + fileName;


    }

    public String generateRandomFileName(String originalFileName) {
        String extension = "";

        // Extract extension (e.g. ".jpg", ".mp4")
        int dotIndex = originalFileName.lastIndexOf('.');
        if (dotIndex > 0) {
            extension = originalFileName.substring(dotIndex);
        }

        // Generate new name
        return UUID.randomUUID().toString() + extension;
    }

    public String generatePresignedUrl(String filename) {
        String key = "uploads/" + UUID.randomUUID() + "_" + filename;

        PutObjectRequest objectRequest = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .build();

        PutObjectPresignRequest presignRequest = PutObjectPresignRequest.builder()
                .signatureDuration(Duration.ofMinutes(10))
                .putObjectRequest(objectRequest)
                .build();

        return presigner.presignPutObject(presignRequest).url().toString();
    }

}
