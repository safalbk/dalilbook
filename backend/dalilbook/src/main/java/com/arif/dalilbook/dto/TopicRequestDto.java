package com.arif.dalilbook.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class TopicRequestDto {
    @NotNull
    private String title;

    @Size(max = 100, message = "description exceded")
    private String description;

    private List<String> tags;

    private List<String> videoIds;
    private List<String> imageIds;
    private List<String> noteIds;
}
