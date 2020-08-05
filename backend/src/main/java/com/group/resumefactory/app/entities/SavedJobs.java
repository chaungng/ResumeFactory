package com.group.resumefactory.app.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class SavedJobs {
    @Id
    public String id;
    public String userId;
    public String company;
    public String location;
    public String title;
    public String type;
    public String url;
    public String description;

    public SavedJobs(String userId, String company, String location, String title, String type, String url, String description) {
        this.userId = userId;
        this.company = company;
        this.location = location;
        this.title = title;
        this.type = type;
        this.url = url;
        this.description = description;
    }
}
