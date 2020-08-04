package com.group.resumefactory.app.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.group.resumefactory.app.entities.PersonalInformation;

public interface PersonalInformationRepository 
		extends MongoRepository<PersonalInformation, String> {
	
	public Optional<List<PersonalInformation>> findByUserId(String userId);
	
	public Optional<List<PersonalInformation>> deleteByUserId(String userId); 

}
