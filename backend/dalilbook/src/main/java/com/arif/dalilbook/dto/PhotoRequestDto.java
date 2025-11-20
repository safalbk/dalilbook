package com.arif.dalilbook.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PhotoRequestDto {

    @NotNull
    private String title;

    @NotNull
    private String url;

    @Size(max = 100, message = "description exceded")
    private String description;

    @NotNull
    private String tags;



}
