package com.arif.dalilbook.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class NoteResponseDto {
    private String id;

    private String title;

    private String text;

    private String description;

    private List<String> tags;


}
