package com.shop.Shop;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

public class Hello {

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello world!";
    }

}
