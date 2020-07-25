package com.group.resumefactory.app.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.group.resumefactory.app.entities.WorkExperience;

public interface WorkExperienceRepository extends MongoRepository<WorkExperience, String> {

}
