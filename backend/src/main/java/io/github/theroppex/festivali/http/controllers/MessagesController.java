package io.github.theroppex.festivali.http.controllers;

import io.github.theroppex.festivali.data.entities.MessagesEntity;
import io.github.theroppex.festivali.services.entityservices.MessagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/messages/")
public class MessagesController {

    @Autowired
    private MessagesService messagesService;

    @RequestMapping(method = RequestMethod.PATCH, value = "{msgId}")
    public void markAsRead(@PathVariable("msgId") Integer msgId) {
        this.messagesService.markAsRead(msgId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "user/{userId}")
    public Collection<MessagesEntity> getUserMessages(@PathVariable Integer userId) {
        return this.messagesService.getUserMessages(userId);
    }
}
