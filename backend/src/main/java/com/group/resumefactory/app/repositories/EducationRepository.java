package com.group.resumefactory.app.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.group.resumefactory.app.entities.Education;

public interface EducationRepository extends MongoRepository<Education, String>{

	public Optional<List<Education>> findByUserId(String userId);
	
	public Optional<List<Education>> deleteByUserId(String userId);
}
