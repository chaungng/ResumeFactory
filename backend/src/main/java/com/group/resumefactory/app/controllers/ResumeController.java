package com.group.resumefactory.app.controllers;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group.resumefactory.app.entities.Resume;
import com.group.resumefactory.app.repositories.ResumeRepository;

@CrossOrigin
@RestController
@RequestMapping("resumes")
public class ResumeController {

    Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @Autowired
    ResumeRepository resumeRepository;
    
    @Autowired
    public ResumeController() {
    	
    }

    @RequestMapping("/allResumes")
    public List<Resume> getAllResumes(){
    	return resumeRepository.findAll();
    }
    
    @PostMapping("/addnewresume")
    public Resume createResume(@Valid @RequestBody Resume resume) {
        Resume savedResume = resumeRepository.save(resume);
        return savedResume;
    }

}
