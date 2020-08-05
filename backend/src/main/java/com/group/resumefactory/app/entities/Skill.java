package com.group.resumefactory.app.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Skill {

	@Id
	private String id;
	
	private String userId;
	
	private String skillName;
	
	private String level;
	
	
//	public String content;

	public Skill() {}
	
//	public Skill(String id, String userId, String content) {
//		super();
//		this.id = id;
//		this.userId = userId;
//		this.content = content;
//	}

	
	public String getId() {
		return id;
	}

	public Skill(String id, String userId, String skillName, String level) {
	super();
	this.id = id;
	this.userId = userId;
	this.skillName = skillName;
	this.level = level;
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

	public String getSkillName() {
		return skillName;
	}

	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}
	
}
