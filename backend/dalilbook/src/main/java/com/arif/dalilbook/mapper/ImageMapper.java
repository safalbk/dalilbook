package com.arif.dalilbook.mapper;

import com.arif.dalilbook.dto.ImageRequestDto;
import com.arif.dalilbook.dto.ImageResponseDto;
import com.arif.dalilbook.dto.VideoRequestDto;
import com.arif.dalilbook.dto.VideoResponseDto;
import com.arif.dalilbook.model.Image;
import com.arif.dalilbook.model.Video;

public class ImageMapper {
    public static ImageResponseDto toDto(Image image){
        ImageResponseDto imageDto =new ImageResponseDto();
        imageDto.setId(image.getId());
        imageDto.setTitle(image.getTitle());
        imageDto.setDescription(image.getDescription());
        imageDto.setUrl(image.getUrl());
        imageDto.setTags(image.getTags());


        return imageDto;

    }

    public static Image toModel(ImageRequestDto imageRequestDto){
        Image image = new Image();
        image.setTitle(imageRequestDto.getTitle());
        image.setDescription(imageRequestDto.getDescription());
        image.setUrl(imageRequestDto.getUrl());
        image.setTags(imageRequestDto.getTags());

        return image;

    }
}
