package com.arif.dalilbook.service;


import com.arif.dalilbook.dto.TopicRequestDto;
import com.arif.dalilbook.dto.TopicResponseDto;
import com.arif.dalilbook.mapper.TopicMapper;
import com.arif.dalilbook.model.Topic;
import com.arif.dalilbook.model.Video;
import com.arif.dalilbook.repository.ImageRepository;
import com.arif.dalilbook.repository.NoteRepository;
import com.arif.dalilbook.repository.TopicRepository;
import com.arif.dalilbook.repository.VideoRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TopicService {
    private final TopicRepository topicRepository;
    private final VideoRepository videoRepository;
    private final ImageRepository imageRepository;
    private final NoteRepository noteRepository;

    public TopicService(
            TopicRepository topicRepository,
            VideoRepository videoRepository,
            ImageRepository imageRepository,
            NoteRepository noteRepository
    ) {
        this.topicRepository = topicRepository;
        this.videoRepository = videoRepository;
        this.imageRepository = imageRepository;
        this.noteRepository = noteRepository;
    }

    public List<TopicResponseDto> getTopics(Pageable pageable) {
        return topicRepository.findAll(pageable)
                .map(TopicMapper::toDto)
                .getContent();
    }

    public TopicResponseDto getTopicById(String id) {
        Topic topic = topicRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Topic not found with id: " + id));

        return TopicMapper.toDto(topic);
    }

    public TopicResponseDto createTopic(TopicRequestDto dto) {

        Topic topic = TopicMapper.toModel(dto);

        // Attach related entities
        if (dto.getVideoIds() != null && !dto.getVideoIds().isEmpty()) {
            topic.setVideos(videoRepository.findAllById(dto.getVideoIds()));
        }

        if (dto.getImageIds() != null && !dto.getImageIds().isEmpty()) {
            topic.setImages(imageRepository.findAllById(dto.getImageIds()));
        }

        if (dto.getNoteIds() != null && !dto.getNoteIds().isEmpty()) {
            topic.setNotes(noteRepository.findAllById(dto.getNoteIds()));
        }

        Topic saved = topicRepository.save(topic);
        return TopicMapper.toDto(saved);
    }


    public TopicResponseDto updateTopic(String id, TopicRequestDto dto) {
        Topic existing = topicRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Topic not found with id: " + id));

        existing.setTitle(dto.getTitle());
        existing.setDescription(dto.getDescription());
        existing.setTags(dto.getTags());

        if (dto.getVideoIds() != null)
            existing.setVideos(videoRepository.findAllById(dto.getVideoIds()));

        if (dto.getImageIds() != null)
            existing.setImages(imageRepository.findAllById(dto.getImageIds()));

        if (dto.getNoteIds() != null)
            existing.setNotes(noteRepository.findAllById(dto.getNoteIds()));

        Topic updated = topicRepository.save(existing);
        return TopicMapper.toDto(updated);
    }

    public Map<String, String> deleteTopic(String id) {
        if (!topicRepository.existsById(id)) {
            throw new RuntimeException("Topic not found with id: " + id);
        }

        topicRepository.deleteById(id);
        return Map.of("status", "deleted");
    }

    public TopicResponseDto addVideoToTopic(String topicId, String videoId) {
        Topic topic = topicRepository.findById(topicId)
                .orElseThrow(() -> new RuntimeException("Topic not found"));

        Video video = videoRepository.findById(videoId)
                .orElseThrow(() -> new RuntimeException("Video not found"));

        topic.getVideos().add(video);
        topicRepository.save(topic);

        return TopicMapper.toDto(topic);
    }


}
