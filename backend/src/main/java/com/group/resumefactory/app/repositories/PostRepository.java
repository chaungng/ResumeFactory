package com.group.resumefactory.app.repositories;

import com.group.resumefactory.app.entities.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {
    public List<Post> findByUserId(@Param("userId") String userId);
}
