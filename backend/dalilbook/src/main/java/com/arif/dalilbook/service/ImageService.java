package com.arif.dalilbook.service;

import com.arif.dalilbook.dto.ImageRequestDto;
import com.arif.dalilbook.dto.ImageResponseDto;
import com.arif.dalilbook.mapper.ImageMapper;
import com.arif.dalilbook.model.Image;
import com.arif.dalilbook.repository.ImageRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ImageService {

    private final ImageRepository imageRepository;

    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    // 🔹 Get Paginated Images (With Search)
    public List<ImageResponseDto> getImages(Pageable pageable, String search) {

        if (search == null || search.isBlank()) {
            List<Image> images = imageRepository.findAll(pageable).getContent();
            return images.stream().map(ImageMapper::toDto).toList();
        } else {
            List<Image> images = imageRepository.searchImages(search, pageable).getContent();
            return images.stream().map(ImageMapper::toDto).toList();
        }
    }

    // 🔹 Get Single Image by ID
    public ImageResponseDto getImageById(String id) {
        Image existingImage = imageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Image not found with id: " + id));
        return ImageMapper.toDto(existingImage);
    }

    // 🔹 Create New Image
    public ImageResponseDto createImage(ImageRequestDto imageRequestDto) {
        Image newImage = imageRepository.save(ImageMapper.toModel(imageRequestDto));
        return ImageMapper.toDto(newImage);
    }

    // 🔹 Update Image
    public ImageResponseDto updateImage(String id, ImageRequestDto imageRequestDto) {
        Image existingImage = imageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Image not found with id: " + id));

        existingImage.setTitle(imageRequestDto.getTitle());
        existingImage.setDescription(imageRequestDto.getDescription());
        existingImage.setUrl(imageRequestDto.getUrl());
        existingImage.setTags(imageRequestDto.getTags());

        Image updatedImage = imageRepository.save(existingImage);
        return ImageMapper.toDto(updatedImage);
    }

    // 🔹 Delete Image
    public Map<String, String> deleteImage(String id) {
        if (!imageRepository.existsById(id)) {
            throw new RuntimeException("Image not found with id: " + id);
        }

        imageRepository.deleteById(id);
        return Map.of("status", "deleted");
    }
}
