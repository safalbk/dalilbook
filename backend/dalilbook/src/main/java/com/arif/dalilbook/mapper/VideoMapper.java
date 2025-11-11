package com.arif.dalilbook.mapper;

import com.arif.dalilbook.dto.VideoRequestDto;
import com.arif.dalilbook.dto.VideoResponseDto;
import com.arif.dalilbook.model.Video;

public class VideoMapper {
    public static VideoResponseDto toDto(Video video){
        VideoResponseDto videoDto =new VideoResponseDto();
        videoDto.setId(video.getId());
        videoDto.setTitle(video.getTitle());
        videoDto.setDescription(video.getDescription());
        videoDto.setUrl(video.getUrl());
        videoDto.setTags(video.getTags());
        return videoDto;

    }

    public static Video toModel(VideoRequestDto videoRequestDto){
        Video video = new Video();
        video.setTitle(videoRequestDto.getTitle());
        video.setDescription(videoRequestDto.getDescription());
        video.setUrl(videoRequestDto.getUrl());
        video.setTags(videoRequestDto.getTags());

        return video;

    }


}
