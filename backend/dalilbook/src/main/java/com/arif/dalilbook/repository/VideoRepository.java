package com.arif.dalilbook.repository;

import com.arif.dalilbook.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface VideoRepository extends JpaRepository<Video, String> {
}
