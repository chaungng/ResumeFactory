package com.group.resumefactory.app.controllers;

import com.group.resumefactory.app.entities.JobPosting;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;

@CrossOrigin
@RestController
@RequestMapping("/jobs")
public class JobPostingController {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    public JobPostingController() { }

    @GetMapping("/all")
    public List<JobPosting> getAllJobs() {
        String line = "";
        List<JobPosting> jobs = null;
        Gson gson = new Gson();

        try (CloseableHttpClient client = HttpClientBuilder.create().build()) {
            HttpGet request = new HttpGet("https://jobs.github.com/positions.json?description=python&full_time=true&location=sf");
            HttpResponse response = client.execute(request);

            BufferedReader bufReader = new BufferedReader(new InputStreamReader(
                    response.getEntity().getContent()));

            StringBuilder builder = new StringBuilder();
            builder.append(line);

            while ((line = bufReader.readLine()) != null) {
                builder.append(line);
                builder.append(System.lineSeparator());
            }

            // Parse list of jobs from json string
            jobs = gson.fromJson(builder.toString(), new TypeToken<ArrayList<JobPosting>>() {
            }.getType());
            
        } catch (IOException e) {
            e.printStackTrace();
        }
        
        return jobs;
    }
}
