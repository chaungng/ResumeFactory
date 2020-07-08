package com.group.resumefactory.app.controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.group.resumefactory.app.models.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group.resumefactory.app.models.LoginForm;
import com.group.resumefactory.app.entities.User;
import com.group.resumefactory.app.exceptions.ResourceNotFoundException;
import com.group.resumefactory.app.repositories.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepository userRepository;

    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    public UserController(){}

    @RequestMapping("/hello")
    public String getHello() {
        return "hello";
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Create a new User
    @PostMapping("/user")
    public User createUser(@Valid @RequestBody User user) {
        User savedUser = userRepository.save(user);
        return savedUser;
    }

    // Get a Single User
    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable(value = "id") Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
    }

    // Update a Note
    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable(value = "id") Long userId, 
    		@Valid @RequestBody User userDetails) {
//    		@Valid @RequestBody String data) {
//    	logger.debug("userDetaul" + userDetails);
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        
        user.setLocation(userDetails.getLocation());
        user.setTitle(userDetails.getTitle());

        if (userDetails.getPasswordHash() != "") {
        	user.setPasswordHash(userDetails.getPasswordHash());
        }
        
        if (userDetails.getUserName() != "") {
        	user.setUserName(userDetails.getUserName());
        }
        
        User updatedUser = userRepository.save(user);
        return updatedUser;
    }
    
//    @PutMapping("/user/basicinfo/{id}")
//    public User updateBasicInfo(@PathVariable(value = "id") Long userId, 
//    		@Valid @RequestBody User userDetail ) {
//    	logger.debug("updateBasicInfo" + lastName);
//        User user = userRepository.findById(userId)
//                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
//
//        user.setFirstName(firstName);
//        user.setLastName(lastName);
//        user.setLocation(location);
//        user.setTitle(title);
//
//        User updatedUser = userRepository.save(user);
//        return updatedUser;
//    }

    // Delete a User
    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        userRepository.delete(user);

        return ResponseEntity.ok().build();
    }

    // Delete a User
    @DeleteMapping("/users")
    public ResponseEntity<?> deleteAllUsers() {
        userRepository.deleteAll();
        return ResponseEntity.ok().build();
    }


    @PostMapping("/user/login")
    public Response<User> loginUser(@RequestBody LoginForm loginForm) {
        // Find the user with that user name
        Response<User> response = new Response<>();
        response.setMessage("Invalid User");

        Optional<User> result = userRepository.findByUsername(loginForm.getUsername());

        // Then check if the password match
        // if match, return true with the user information
        if (!result.isPresent()) {
            return response;
        }

        User user = result.get();
        if (loginForm.getPassword().equals(user.getPasswordHash())) {
            response.setSuccess(true);
            response.setMessage("Success");
            response.setData(user);
        } else {
            response.setMessage("Invalid User");
        }

        return response;
    }
    
    
}
