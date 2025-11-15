package com.arif.dalilbook.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
public class Topic {

    @Id
    private String id;

    @NotNull
    private String title;

    @NotNull
    private String description;

    @ElementCollection
    @CollectionTable(name = "topic_tags", joinColumns = @JoinColumn(name = "topic_id"))
    @Column(name = "tag")
    private List<String> tags;

    @PrePersist
    public void generateId() {
        if (this.id == null) {
            this.id = UUID.randomUUID().toString();
        }
    }
}
