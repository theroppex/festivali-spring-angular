package io.github.theroppex.festivali.http.controllers;

import io.github.theroppex.festivali.services.entityservices.MessagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/messages/")
public class MessagesController {

    @Autowired
    private MessagesService messagesService;

    @RequestMapping(method = RequestMethod.PATCH, value = "{msgId}")
    public void markAsRead(@PathVariable("msgId") Integer msgId) {
        this.messagesService.markAsRead(msgId);
    }
}
