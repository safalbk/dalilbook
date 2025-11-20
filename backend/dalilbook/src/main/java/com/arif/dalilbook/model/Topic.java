package com.arif.dalilbook.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@EntityListeners(org.springframework.data.jpa.domain.support.AuditingEntityListener.class)
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

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime updatedAt;


}
