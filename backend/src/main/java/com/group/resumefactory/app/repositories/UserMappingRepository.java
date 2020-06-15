package com.group.resumefactory.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.group.resumefactory.app.entities.UserContentMapping;


@Repository
public interface UserMappingRepository extends JpaRepository<UserContentMapping, Long> {

//	List<UserContentMapping> getMappingList();
}
