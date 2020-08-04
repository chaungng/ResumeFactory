package com.group.resumefactory.app.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.group.resumefactory.app.entities.WorkExperience;

public interface WorkExperienceRepository extends MongoRepository<WorkExperience, String> {
	
	public Optional<List<WorkExperience>> findByUserId (String userId);

}
