package com.group.resumefactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ResumeFactoryApplication {

	public static void main(String[] args) {
		SpringApplication.run(ResumeFactoryApplication.class, args);
	}
}
