package com.arif.dalilbook.repository;

import com.arif.dalilbook.model.Image;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ImageRepository extends JpaRepository<Image, String> {
    @Query("""
    SELECT DISTINCT n
    FROM Image n
    LEFT JOIN n.tags t
    WHERE LOWER(n.title) LIKE LOWER(CONCAT('%', :key, '%'))
       OR LOWER(t) LIKE LOWER(CONCAT('%', :key, '%'))
""")
    Page<Image> searchImages(@Param("key") String key, Pageable pageable);
}
