package com.group.resumefactory.app.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jobpost")
public class PostController {

    Logger logger = LoggerFactory.getLogger(this.getClass());

}
