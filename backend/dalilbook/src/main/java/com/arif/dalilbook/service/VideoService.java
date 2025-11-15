package com.arif.dalilbook.service;


import com.arif.dalilbook.dto.VideoRequestDto;
import com.arif.dalilbook.dto.VideoResponseDto;
import com.arif.dalilbook.mapper.VideoMapper;
import com.arif.dalilbook.model.Video;
import com.arif.dalilbook.repository.VideoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.UUID;

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

    public VideoResponseDto getVideoById(String id){

        Video existingVideo = videoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Video not found with id: " + id));
        return VideoMapper.toDto(existingVideo);

    }

    public VideoResponseDto createVideo(VideoRequestDto videoRequestDto){
        Video newVideo =videoRepository.save(VideoMapper.toModel(videoRequestDto));

        return VideoMapper.toDto(newVideo);

    }

    // 🔹 UPDATE video
    public VideoResponseDto updateVideo(String id, VideoRequestDto videoRequestDto) {
        Video existingVideo = videoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Video not found with id: " + id));

        // update fields
        existingVideo.setTitle(videoRequestDto.getTitle());
        existingVideo.setDescription(videoRequestDto.getDescription());
        existingVideo.setUrl(videoRequestDto.getUrl());
        existingVideo.setTags(videoRequestDto.getTags());

        Video updatedVideo = videoRepository.save(existingVideo);
        return VideoMapper.toDto(updatedVideo);
    }

    // 🔹 DELETE video
    public Map<String, String> deleteVideo(String id) {
        if (!videoRepository.existsById(id)) {
            throw new RuntimeException("Video not found with id: " + id);
        }

        videoRepository.deleteById(id);
        return Map.of("status", "deleted");
    }
}
