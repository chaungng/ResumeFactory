package com.group.resumefactory.app.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import com.group.resumefactory.app.entities.Keyword;

public interface KeywordRepository extends MongoRepository<Keyword, String>{

	public Optional<Keyword> findById(@Param("id") String id);
}
