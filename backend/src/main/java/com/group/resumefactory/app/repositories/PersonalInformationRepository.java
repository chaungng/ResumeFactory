package com.group.resumefactory.app.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.group.resumefactory.app.entities.PersonalInformation;

public interface PersonalInformationRepository 
		extends MongoRepository<PersonalInformation, String> {

}
