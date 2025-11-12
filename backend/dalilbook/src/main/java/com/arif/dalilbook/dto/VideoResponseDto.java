package com.arif.dalilbook.dto;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;
@Getter
@Setter
public class VideoResponseDto {

    private String id;

    private String title;

    private String url;

    private String description;

    private List<String> tags;



}
