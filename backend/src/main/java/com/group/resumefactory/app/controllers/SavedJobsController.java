package com.group.resumefactory.app.controllers;

import java.util.List;

import javax.validation.Valid;

import com.group.resumefactory.app.models.Response;
import com.group.resumefactory.app.repositories.SavedJobsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.group.resumefactory.app.entities.SavedJobs;

@CrossOrigin
@RestController
@RequestMapping("savedjobs")
public class SavedJobsController {

    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    SavedJobsRepository savedJobsRepository;

    @Autowired
    public SavedJobsController() { }

    @GetMapping("/{userId}")
    public Response<List<SavedJobs>> get(@PathVariable String userId){
        List<SavedJobs> list = savedJobsRepository.findByUserId(userId);
        Response<List<SavedJobs>> response = new Response<>();
        response.setData(list);
        return response;
    }

    @PostMapping()
    public Response<Boolean> post(@Valid @RequestBody SavedJobs savedJobs) {
        savedJobsRepository.save(savedJobs);
        System.out.println(savedJobs);
        Response<Boolean> response = new Response<>();
        response.setSuccess(true);
        response.setMessage("success");
        return response;
    }

    @DeleteMapping("/{id}")
    public Response<Boolean> delete(@Valid @PathVariable String id) {
        savedJobsRepository.deleteById(id);
        Response<Boolean> response = new Response<>();
        response.setSuccess(true);
        response.setMessage("success");
        return response;
    }
}
