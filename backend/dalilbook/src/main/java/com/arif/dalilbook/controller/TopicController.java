package com.arif.dalilbook.controller;


import com.arif.dalilbook.dto.TopicRequestDto;
import com.arif.dalilbook.dto.TopicResponseDto;
import com.arif.dalilbook.service.TopicService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/topic")
public class TopicController {

    private final TopicService topicService;

    TopicController(TopicService topicService){
        this.topicService = topicService;
    }

    @GetMapping
    public ResponseEntity<List<TopicResponseDto>> getTopics(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        return ResponseEntity.ok(topicService.getTopics(PageRequest.of(page, size)));
    }

    // 🔹 GET Single Topic by ID
    @GetMapping("/{id}")
    public ResponseEntity<TopicResponseDto> getTopicById(@PathVariable String id) {
        return ResponseEntity.ok(topicService.getTopicById(id));
    }

    // 🔹 Create Topic
    @PostMapping
    public ResponseEntity<TopicResponseDto> createTopic(@RequestBody TopicRequestDto topicRequestDto) {
        return ResponseEntity.ok(topicService.createTopic(topicRequestDto));
    }

    // 🔹 Update Topic
    @PutMapping("/{id}")
    public ResponseEntity<TopicResponseDto> updateTopic(
            @PathVariable String id,
            @RequestBody TopicRequestDto topicRequestDto
    ) {
        return ResponseEntity.ok(topicService.updateTopic(id, topicRequestDto));
    }

    // 🔹 Delete Topic
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteTopic(@PathVariable String id) {
        return ResponseEntity.ok(topicService.deleteTopic(id));
    }


}
