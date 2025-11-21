package com.arif.dalilbook.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class ImageRequestDto {
    @NotNull
    private String title;

    @NotNull
    private String url;

    @Size(max = 100, message = "description exceded")
    private String description;

    private List<String> tags;
}
