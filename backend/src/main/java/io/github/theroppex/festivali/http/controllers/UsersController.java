package io.github.theroppex.festivali.http.controllers;

import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.services.entityservices.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
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

    @RequestMapping(method = RequestMethod.GET, value = "logout")
    public String logout() {
        SecurityContextHolder.clearContext();
        return "Logout successful";
    }

    @RequestMapping(method = RequestMethod.GET, value = "active")
    public Collection<UsersEntity> getActiveUsers() {
        return usersService.findActiveUsers();
    }

    @RequestMapping(method = RequestMethod.GET, value = "inactive")
    public Collection<UsersEntity> getInactiveUsers() {
        return usersService.findInactiveUsers();
    }

    //TODO Videti zazto DELTE method ne radi
    @RequestMapping(method = RequestMethod.DELETE, value = "{userId}")
    public void deleteUser(@PathVariable("userId") Integer userId) {
        usersService.deleteUser(userId);
    }

    @RequestMapping(method = RequestMethod.PATCH, value = "ban/{userId}")
    public void banUser(@PathVariable("userId") Integer userId) {
        this.usersService.banUser(userId);
    }

    @RequestMapping(method = RequestMethod.PATCH, value = "unban/{userId}")
    public void unbanUser(@PathVariable("userId") Integer userId) {
        this.usersService.unbanUser(userId);
    }

    @RequestMapping(method = RequestMethod.PATCH, value = "setseller/{userId}")
    public void setSeller(@PathVariable("userId") Integer userId) {
        this.usersService.setSeller(userId);
    }

    @RequestMapping(method = RequestMethod.PATCH, value = "removeseller/{userId}")
    public void removeSeller(@PathVariable("userId") Integer userId) {
        this.usersService.removeSeller(userId);
    }

    @RequestMapping(method = RequestMethod.PATCH, value = "activate/{userId}")
    public void activateUser(@PathVariable("userId") Integer userId) {
        this.usersService.activateUser(userId);
    }
}
