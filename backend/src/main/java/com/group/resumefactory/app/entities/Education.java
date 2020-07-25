package com.group.resumefactory.app.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Education {

	@Id
	public String id;
	
	public String userId;
	
	public String content;

	public Education() {}
	
	public Education(String id, String userId, String content) {
		super();
		this.id = id;
		this.userId = userId;
		this.content = content;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

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
