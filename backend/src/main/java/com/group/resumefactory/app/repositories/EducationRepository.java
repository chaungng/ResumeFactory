package com.group.resumefactory.app.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.group.resumefactory.app.entities.Education;

public interface EducationRepository extends MongoRepository<Education, String>{

}
