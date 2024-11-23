package com.shop.Shop;

import com.shop.Shop.models.Bike;
import com.shop.Shop.repository.BikeRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class SiteShopApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext configurableApplicationContext = SpringApplication.run(SiteShopApplication.class, args);

		BikeRepository bikeRepository = configurableApplicationContext.getBean(BikeRepository.class);

		Bike bike1 = new Bike("qwe" ,"ewq");

		bikeRepository.save(bike1);

	}

}
