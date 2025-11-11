package com.arif.dalilbook.repository;


import com.arif.dalilbook.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TopicRepository extends JpaRepository<Topic, String> {
}
