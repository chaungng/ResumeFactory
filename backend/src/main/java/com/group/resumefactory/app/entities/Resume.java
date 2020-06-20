package com.group.resumefactory.app.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document
public class Resume {
    @Id
    public String id;

    public String userId;
   
    public String content;
    
    public String title;
    
    public String level;

    public Resume() {}

    public Resume(String userId, String content, String title) {
        this.userId = userId;
        this.content = content;
        this.title = title;
    }
    
    public Resume(String userId, String content) {
        this.userId = userId;
        this.content = content;
    }

    public Resume(String userId, String content, String title, String level) {
		this.userId = userId;
		this.content = content;
		this.title = title;
		this.level = level;
	}

	public String getUserId() {
        return userId;
    }

    public String getContent() {
        return content;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setContent(String content) {
        this.content = content;
    }

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}
    
    
    
}
