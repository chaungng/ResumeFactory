package com.group.resumefactory.app.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.group.resumefactory.app.entities.Skill;

public interface SkillRepository extends MongoRepository<Skill, String>{

}
