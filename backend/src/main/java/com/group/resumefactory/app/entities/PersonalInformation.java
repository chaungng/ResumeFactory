package com.group.resumefactory.app.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class PersonalInformation {

	@Id
	public String id;
	
	private String userId;
	
//	private String content;
	
	private String firstName;
	
	private String lastName;
	
	private String phone;
	
	private String email;
	
	private String city;
	
	private String state;
	
	private String zip;
	
	private String country;
	
	private String summary;

	public PersonalInformation() {}
	
	public PersonalInformation(String id, String userId, String firstName, String lastName, String phone, String email,
			String city, String state, String zip, String country, String summary) {
		super();
		this.id = id;
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.setPhone(phone);
		this.email = email;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.country = country;
		this.setSummary(summary);
	}



//	public PersonalInformation(String id, String userId, String content) {
//		super();
//		this.id = id;
//		this.userId = userId;
//		this.content = content;
//	}
	
	

	public String getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getzip() {
		return zip;
	}

	public void setzip(String zip) {
		this.zip = zip;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

}
