package com.group.resumefactory.app.controllers;

import com.group.resumefactory.app.entities.JobPosting;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/jobPosting")
public class JobPostingController {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    public JobPostingController() {

    }

    @RequestMapping("/github")
    public String getGreeting() {
        return "Job Posting from GitHub!";
    }

    @GetMapping("/jobs")
    public List<JobPosting> getAllJobs() {
        return null;
    }
}
