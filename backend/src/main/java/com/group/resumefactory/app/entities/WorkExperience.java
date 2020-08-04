package com.group.resumefactory.app.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class WorkExperience {

	@Id
	private String id;
	
	private String userId;
	
//	public String content;
	
	private String jobTitle;
	
	private String company;
	
	private String country;
	
	private String from;
	
	private String to;
	
	private String description;


	public WorkExperience() {}
	
	
	
	public WorkExperience(String id, String userId, String jobTitle, 
			String company, String country, String from,
			String to, String description) {
		super();
		this.id = id;
		this.userId = userId;
		this.jobTitle = jobTitle;
		this.company = company;
		this.country = country;
		this.from = from;
		this.to = to;
		this.description = description;
	}



//	public WorkExperience(String id, String userId, String content) {
//		super();
//		this.id = id;
//		this.userId = userId;
//		this.content = content;
//	}

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

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

//	public String getContent() {
//		return content;
//	}
//
//	public void setContent(String content) {
//		this.content = content;
//	}
	
	
	
}
