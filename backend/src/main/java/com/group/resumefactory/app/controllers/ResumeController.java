package com.group.resumefactory.app.controllers;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group.resumefactory.app.entities.Education;
import com.group.resumefactory.app.entities.PersonalInformation;
import com.group.resumefactory.app.entities.Resume;
import com.group.resumefactory.app.entities.Skill;
import com.group.resumefactory.app.entities.WorkExperience;
import com.group.resumefactory.app.repositories.EducationRepository;
import com.group.resumefactory.app.repositories.PersonalInformationRepository;
import com.group.resumefactory.app.repositories.ResumeRepository;
import com.group.resumefactory.app.repositories.SkillRepository;
import com.group.resumefactory.app.repositories.WorkExperienceRepository;

@CrossOrigin
@RestController
@RequestMapping("resumes")
public class ResumeController {

    Logger logger = LoggerFactory.getLogger(this.getClass());
    
    @Autowired
    ResumeRepository resumeRepository;
    
    @Autowired
    EducationRepository educationRepository;
    
    @Autowired
    PersonalInformationRepository personalInfoRepository;
    
    @Autowired
    SkillRepository skillRepository;
    
    @Autowired
    WorkExperienceRepository workExpRespository;
    
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
    
    @GetMapping("resumes")
    public List<Resume> getResumeById(String userId){
    	List<Resume> resumes = resumeRepository.findByUserId(userId);
    	return resumes;
    }
    
    @GetMapping("count")
    public int getCountResumeByUserId(String userId){
    	List<Resume> resumes = resumeRepository.findByUserId(userId);
    	return resumes.size();
    }
    
    @PostMapping("/saveInfo")
    public String savePersonalInfo 
    		(@Valid @RequestBody PersonalInformation personalInfo) {
    	PersonalInformation savedPersonalInfo = personalInfoRepository.save(personalInfo);
    	return savedPersonalInfo.getId();
    }
    
    @PostMapping("/saveWorkExp")
    public String saveWorkExp (@Valid @RequestBody WorkExperience workExp) {
    	WorkExperience savedWorkExp = workExpRespository.save(workExp);
    	return savedWorkExp.getId();
    }
    
    @PostMapping("/saveSkill")
    public String saveSkill (@Valid @RequestBody Skill skill) {
    	Skill savedSkill = skillRepository.save(skill);
    	return savedSkill.getId();
    }
    
    @PostMapping("/saveEdu")
    public String saveEdu (@Valid @RequestBody Education education) {
    	Education savedEdu = educationRepository.save(education);
    	return savedEdu.getId();
    }
    

}
