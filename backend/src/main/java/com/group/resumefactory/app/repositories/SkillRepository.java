package com.group.resumefactory.app.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.group.resumefactory.app.entities.Skill;

public interface SkillRepository extends MongoRepository<Skill, String>{

	public Optional<List<Skill>> findByUserId(String userId);
}
