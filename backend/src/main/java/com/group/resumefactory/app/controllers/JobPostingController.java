package com.group.resumefactory.app.controllers;

import com.group.resumefactory.app.entities.JobPosting;
import com.group.resumefactory.app.entities.JobSearchParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/jobs")
public class JobPostingController {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    final String DEFAULT_TITLE = "developer";
    final String DEFAULT_LOCATION = "vancouver";
    final String URL_API = "https://jobs.github.com/positions.json";
    final String URL_TITLE = "?tittle=";
    final String URL_LOCATION = "&location=";
    final String URL_FULL_TIME = "&full_time";

    @Autowired
    public JobPostingController() {
    }

    @PostMapping("/search")
    public List<JobPosting> searchJobs(@Valid @RequestBody JobSearchParam param) {
        String line = "";
        String title, location, isFullTime;
        Gson gson = new Gson();
        List<JobPosting> jobs = null;

        try (CloseableHttpClient client = HttpClientBuilder.create().build()) {
            isFullTime = String.valueOf(param.isFullTime());

            if (param.getTitle() != null) {
                title = param.getTitle();
            } else {
                title = DEFAULT_TITLE;
            }

            if (param.getLocation() != null) {
                location = param.getLocation();
            } else {
                location = DEFAULT_LOCATION;
            }

            System.out.println(title);
            System.out.println(location);

            StringBuilder urlBuilder = new StringBuilder();
            urlBuilder.append(URL_API)
                    .append(URL_TITLE)
                    .append(title)
                    .append(URL_LOCATION)
                    .append(location)
                    .append(URL_FULL_TIME)
                    .append(isFullTime);

            HttpGet request = new HttpGet(urlBuilder.toString());
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
