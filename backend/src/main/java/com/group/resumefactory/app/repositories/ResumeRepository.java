package com.group.resumefactory.app.repositories;

import java.util.List;

import com.group.resumefactory.app.entities.Resume;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface ResumeRepository extends MongoRepository<Resume, String> {
//    public List<Resume> _findByUserId(String userId);
//    public List<Resume> findByUserId(@Param("userId") String userId);
}
