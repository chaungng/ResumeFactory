package com.group.resumefactory.app.entities;
import org.springframework.data.annotation.Id;

public class Post {
    @Id
    public String id;

    public String userId;
    public String content;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
