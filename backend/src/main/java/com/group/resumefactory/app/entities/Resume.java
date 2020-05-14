package com.group.resumefactory.app.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;

@RedisHash("resume")
public class Resume implements Serializable {
    @Id
    private String id;

    public Resume(String id) {
        this.id = id;
    }
}


