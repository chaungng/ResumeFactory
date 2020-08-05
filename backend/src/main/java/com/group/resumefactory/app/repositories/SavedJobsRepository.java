package com.group.resumefactory.app.repositories;

import com.group.resumefactory.app.entities.SavedJobs;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SavedJobsRepository extends MongoRepository<SavedJobs, String> {
    public List<SavedJobs> findByUserId(String userId);
}
