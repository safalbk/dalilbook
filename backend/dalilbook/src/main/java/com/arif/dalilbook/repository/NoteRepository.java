package com.arif.dalilbook.repository;

import com.arif.dalilbook.model.Note;
import com.arif.dalilbook.model.Video;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.UUID;

public interface NoteRepository extends JpaRepository<Note, String> {
    Page<Note> findByTitle(String title, Pageable pageable);
    @Query("""
    SELECT DISTINCT n
    FROM Note n
    LEFT JOIN n.tags t
    WHERE LOWER(n.title) LIKE LOWER(CONCAT('%', :key, '%'))
       OR LOWER(t) LIKE LOWER(CONCAT('%', :key, '%'))
""")
    Page<Note> searchNotes(@Param("key") String key, Pageable pageable);


}
