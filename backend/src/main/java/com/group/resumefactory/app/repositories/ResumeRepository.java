package com.group.resumefactory.app.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import com.group.resumefactory.app.entities.Resume;

public interface ResumeRepository extends MongoRepository<Resume, String> {
//    public List<Resume> _findByUserId(String userId);
//	@Query("{ 'userId' : ?0 }")
    public List<Resume> findByUserId(String userId);
	
//    public List<Resume> findByTempData(String temp);
}
