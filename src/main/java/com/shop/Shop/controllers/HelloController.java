package com.shop.Shop.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

public class HelloController {
    @GetMapping("/hello")
        public String helloWorld() {
            return "Hello world!";
        }
}
