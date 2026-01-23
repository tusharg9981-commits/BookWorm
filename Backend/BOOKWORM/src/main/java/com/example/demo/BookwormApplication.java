package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.persistence.autoconfigure.EntityScan;
import org.springframework.boot.security.autoconfigure.UserDetailsServiceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan("com.example")
@SpringBootApplication(
        exclude = UserDetailsServiceAutoConfiguration.class
)
@EnableJpaRepositories("com.example.repository")
@EntityScan("com.example.model")
public class BookwormApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookwormApplication.class, args);
    }

}
