package com.arif.dalilbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class DalilbookApplication {

	public static void main(String[] args) {
		SpringApplication.run(DalilbookApplication.class, args);




	}

}
