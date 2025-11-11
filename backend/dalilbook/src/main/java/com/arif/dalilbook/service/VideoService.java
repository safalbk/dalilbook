package com.arif.dalilbook.service;


import com.arif.dalilbook.dto.VideoRequestDto;
import com.arif.dalilbook.dto.VideoResponseDto;
import com.arif.dalilbook.mapper.VideoMapper;
import com.arif.dalilbook.model.Video;
import com.arif.dalilbook.repository.VideoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoService {

    private final VideoRepository videoRepository;

    public VideoService(VideoRepository videoRepository){
        this.videoRepository =videoRepository;

    }

    public List<VideoResponseDto> getVideos(){
        List<Video> videos = videoRepository.findAll();
        return videos.stream().map(VideoMapper::toDto).toList();
    }

    public VideoResponseDto createVideo(VideoRequestDto videoRequestDto){
        Video newVideo =videoRepository.save(VideoMapper.toModel(videoRequestDto));

        return VideoMapper.toDto(newVideo);

    }
}
