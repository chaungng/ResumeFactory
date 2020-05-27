package com.group.resumefactory.app.controllers;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

@RestController
@RequestMapping("/api")
public class UserController {

    UserRepository userRepository;

    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    public UserController(){}

    @RequestMapping("/hello")
    public String getHello() {
        return "hello";
    }

    @CrossOrigin
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

//    @PostMapping("/hello1")
//    @RequestMapping(value = "/hello1", method = RequestMethod.POST)
//    public String getHello1(@RequestBody User user) {
//    	return "hello1";
//    }

    // Create a new User
    @CrossOrigin
    @PostMapping("/user")
    public User createUser(@Valid @RequestBody User user) {
        User savedUser = userRepository.save(user);
        return savedUser;
    }

    // Get a Single User
    @CrossOrigin
    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable(value = "id") Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
    }

    // Update a Note
    @CrossOrigin
    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody User userDetails) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());

        User updatedUser = userRepository.save(user);
        return updatedUser;
    }

    // Delete a User
    @CrossOrigin
    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        userRepository.delete(user);

        return ResponseEntity.ok().build();
    }

    // Delete a User
    @CrossOrigin
    @DeleteMapping("/users")
    public ResponseEntity<?> deleteAllUsers() {
        userRepository.deleteAll();
        return ResponseEntity.ok().build();
    }

    @CrossOrigin
    @PostMapping("/user/login")
    public User loginUser(@RequestBody LoginForm loginForm) {
        // Get all the user
        // userRepository.findAll()
        // Find the user with that user name
        User user = userRepository.findByUsername(loginForm.getUsername())
                .orElseThrow(() -> new ResourceNotFoundException("User", "username", loginForm.getUsername()));

        // Then check if the password match
        // if match, return true with the user information
        if (loginForm.getPassword().equals(user.getPasswordHash())) {
            return user;
        } else {
            return null;
        }
    }
}
