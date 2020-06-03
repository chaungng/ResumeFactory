package com.group.resumefactory.app.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import com.group.resumefactory.app.entities.Result;

public interface ResultRepository extends MongoRepository<Result, String>{
	public Optional<Result> findById(@Param("id") String id);
}
