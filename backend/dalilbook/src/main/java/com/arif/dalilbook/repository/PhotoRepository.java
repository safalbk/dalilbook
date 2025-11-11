package com.arif.dalilbook.repository;

import com.arif.dalilbook.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface PhotoRepository extends JpaRepository<Photo, String> {
}
