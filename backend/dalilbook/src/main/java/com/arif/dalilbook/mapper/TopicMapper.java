package com.arif.dalilbook.mapper;

import com.arif.dalilbook.dto.TopicRequestDto;
import com.arif.dalilbook.dto.TopicResponseDto;
import com.arif.dalilbook.dto.VideoRequestDto;
import com.arif.dalilbook.dto.VideoResponseDto;
import com.arif.dalilbook.model.Topic;
import com.arif.dalilbook.model.Video;

import java.util.List;

public class TopicMapper {

    public static TopicResponseDto toDto(Topic topic) {
        TopicResponseDto dto = new TopicResponseDto();
        dto.setId(topic.getId());
        dto.setTitle(topic.getTitle());
        dto.setDescription(topic.getDescription());
        dto.setTags(topic.getTags());

        dto.setVideoIds(
                topic.getVideos() != null ?
                        topic.getVideos().stream().map(v -> v.getId()).toList() :
                        List.of()
        );

        dto.setImageIds(
                topic.getImages() != null ?
                        topic.getImages().stream().map(i -> i.getId()).toList() :
                        List.of()
        );

        dto.setNoteIds(
                topic.getNotes() != null ?
                        topic.getNotes().stream().map(n -> n.getId()).toList() :
                        List.of()
        );



        return dto;
    }

    public static Topic toModel(TopicRequestDto topicRequestDto){
        Topic topic = new Topic();
        topic.setTitle(topicRequestDto.getTitle());
        topic.setDescription(topicRequestDto.getDescription());
        topic.setTags(topicRequestDto.getTags());
        return topic;

    }
}
