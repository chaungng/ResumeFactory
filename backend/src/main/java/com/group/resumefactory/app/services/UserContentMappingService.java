package com.group.resumefactory.app.services;

import java.util.ArrayList;
import java.util.List;

import com.group.resumefactory.app.entities.UserContentMapping;
import com.group.resumefactory.app.repositories.UserMappingRepository;

public class UserContentMappingService {

	UserMappingRepository userMappingRepository;
	
	public List<UserContentMapping> getAllUserMappings (){
		List<UserContentMapping> mappingList = new ArrayList<UserContentMapping>();
		
		return mappingList;
	}
	
	public List<UserContentMapping> getUserListById(Long userId){
		List<UserContentMapping> mappingList = new ArrayList<UserContentMapping>();
		
		return mappingList;
	}
}
