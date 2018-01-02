package io.github.theroppex.festivali.http.controllers;

import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.services.entityservices.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;



@RestController
@RequestMapping("/users/")
public class UsersController {
    private final UsersService usersService;

    @Autowired
    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<UsersEntity> getUsers() {
        return this.usersService.getAllUsers();
    }

    @RequestMapping(method = RequestMethod.GET, value = "exists")
    public Map<String, Boolean> isUserByUsername(@RequestParam("username") String username) {
        return Collections.singletonMap("result", usersService.isUserByUsername(username));
    }

    @RequestMapping(method = RequestMethod.GET, value = "session")
    public String checkSessiont() {
        return "Session is valid";
    }

    @RequestMapping(method = RequestMethod.GET, value = "auth")
    public UsersEntity getCurrentUser() {
        UsersEntity user = (UsersEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return user;
    }
}
