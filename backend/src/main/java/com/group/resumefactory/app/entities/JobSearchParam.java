package com.group.resumefactory.app.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class JobSearchParam {
    private String title;
    private String location;
    private boolean fullTime;

    public JobSearchParam() {
    }

    public JobSearchParam(String title, String location, boolean fullTime) {
        this.title = title;
        this.location = location;
        this.fullTime = fullTime;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public boolean isFullTime() {
        return fullTime;
    }

    public void setFullTime(boolean fullTime) {
        this.fullTime = fullTime;
    }
}
