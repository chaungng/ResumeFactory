package com.group.resumefactory.app.repositories;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.group.resumefactory.app.entities.Resume;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public class ResumeRepository {

//    UserRepository userRepository;
    RedisTemplate redisTemplate;

    @Autowired
    public ResumeRepository() {}

    private static final String KEY = "user";
    public Resume findByName(String name) {
        Map userMap = (Map) redisTemplate.opsForHash().get(KEY, name);
        Resume resume = new ObjectMapper().convertValue(userMap, Resume.class);
        return resume;
    }

}
