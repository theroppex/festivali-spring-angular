package io.github.theroppex.festivali.http.controllers;

import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.services.entityservices.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users/register/")
public class RegistrationController {

    private final UsersService usersService;

    @Autowired
    public RegistrationController(UsersService usersService) {
        this.usersService = usersService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public UsersEntity registerUser(@Validated @RequestBody UsersEntity user) {
        return usersService.registerUser(user);
    }
}
