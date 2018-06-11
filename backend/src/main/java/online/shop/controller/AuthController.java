package online.shop.controller;

import online.shop.model.User;
import online.shop.response.GeneralFormat;
import online.shop.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class AuthController {
    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public GeneralFormat login(@RequestBody User user) { return authService.login(user); }

    @PostMapping("/register")
    public GeneralFormat register(@RequestBody User user) { return authService.register(user); }
}
