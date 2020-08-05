package com.group.resumefactory.app.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.group.resumefactory.app.entities.User;
import com.group.resumefactory.app.models.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.group.resumefactory.app.entities.Education;
import com.group.resumefactory.app.entities.PersonalInformation;
import com.group.resumefactory.app.entities.Resume;
import com.group.resumefactory.app.entities.Skill;
import com.group.resumefactory.app.entities.WorkExperience;
import com.group.resumefactory.app.exceptions.ResourceNotFoundException;
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

    @PutMapping("/{id}")
    public Resume saveResume(@Valid @RequestBody Resume resume, @PathVariable String id) {
        resume.id = id;
        Resume savedResume = resumeRepository.save(resume);
        return savedResume;
    }
    
    @GetMapping("resumes")
    public Response<List<Resume>> getResumeByUserId(String userId){
    	List<Resume> resumes = resumeRepository.findByUserId(userId);

        Response<List<Resume>> response = new Response<>();
        response.setSuccess(true);
        response.setMessage("Success");
        response.setData(resumes);
        
    	return response;
    }
    
    @GetMapping("count")
    public int getCountResumeByUserId(String userId){
    	List<Resume> resumes = resumeRepository.findByUserId(userId);
    	return resumes.size();
    }
    
    @PostMapping("/saveInfo")
    public String savePersonalInfo 
    		(@Valid @RequestBody PersonalInformation personalInfo) {
    	String userId = personalInfo.getUserId();
    	Optional<List<PersonalInformation>> result = personalInfoRepository.findByUserId(userId);
    	if (result.get().size() > 0) {
    		personalInfoRepository.deleteByUserId(userId);
    	}
    	
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
    
    @GetMapping("/personalInfo")
    public Response<PersonalInformation> getPersonalInfo (String userId) {
    	Response<PersonalInformation> response = new Response<>();
    	Optional<List<PersonalInformation>> result = personalInfoRepository.findByUserId(userId);
    	if (!result.isPresent()) {
            return response;
        }

        response.setSuccess(true);
        response.setMessage("Success");
        response.setData(result.get().get(0));

        return response;
    }
    
    @GetMapping("/workExp")
    public Response<List<WorkExperience>> getWorkExp (String userId) {
    	Response<List<WorkExperience>> response = new Response<>();
    	Optional<List<WorkExperience>> result = workExpRespository.findByUserId(userId);
    	if (!result.isPresent()) {
            return response;
        }

        response.setSuccess(true);
        response.setMessage("Success");
        response.setData(result.get());

        return response;
    }

    @GetMapping("/skill")
    public Response<List<Skill>> getSkill (String userId) {
    	Response<List<Skill>> response = new Response<>();
    	Optional<List<Skill>> result = skillRepository.findByUserId(userId);
    	if (!result.isPresent()) {
            return response;
        }

        response.setSuccess(true);
        response.setMessage("Success");
        response.setData(result.get());

        return response;
    }
    
    @GetMapping("/{id}")
    public Response<Resume> getResumeById(@PathVariable String id){
        Response<Resume> response = new Response<>();
        response.setMessage("Invalid User");

        Optional<Resume> result = resumeRepository.findById(id);

        if (!result.isPresent()) {
            return response;
        }

        response.setSuccess(true);
        response.setMessage("Success");
        response.setData(result.get());

        return response;
    }

    @PutMapping("/updateWorkExp/{id}")
    public String updateWorkExp(@PathVariable(value = "id") String id, 
    		@Valid @RequestBody WorkExperience workExp) {
    	WorkExperience wExp = workExpRespository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("WorkExperience", "id", id));

        wExp.setJobTitle(workExp.getJobTitle());
        wExp.setCompany(workExp.getCompany());
        wExp.setCountry(workExp.getCountry());
        wExp.setFrom(workExp.getFrom());
        wExp.setTo(workExp.getTo());
//        wExp.setUserId(workExp.getUserId());
        wExp.setDescription(workExp.getDescription());
        
        WorkExperience updatedWExp = workExpRespository.save(wExp);
        return updatedWExp.getId();
    }
    
    @PutMapping("/updateSkill/{id}")
    public String updateSkill(@PathVariable(value = "id") String id, 
    		@Valid @RequestBody Skill skill) {
    	Skill sk = skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Skill", "id", id));
    	
    	sk.setSkillName(skill.getSkillName());
    	sk.setLevel(skill.getLevel());
        
        Skill updatedSkill = skillRepository.save(sk);
        return updatedSkill.getId();
    }
}
