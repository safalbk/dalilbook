package com.arif.dalilbook.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
public class Note {

    @Id
    private String id;

    @NotNull
    private String title;

    @NotNull
    private String description;

    @NotNull
    private String tags;

    @NotNull
    private String text;

    @PrePersist
    public void generateId() {
        if (this.id == null) {
            this.id = UUID.randomUUID().toString();
        }
    }
}
