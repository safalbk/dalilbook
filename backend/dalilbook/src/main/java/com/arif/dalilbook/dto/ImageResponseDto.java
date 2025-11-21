package com.arif.dalilbook.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class ImageResponseDto {
    private String id;

    private String title;

    private String url;

    private String description;

    private List<String> tags;

}
