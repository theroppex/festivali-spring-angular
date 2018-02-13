package io.github.theroppex.festivali.http.controllers.crud;

import io.github.theroppex.festivali.data.entities.CommentsEntity;
import io.github.theroppex.festivali.services.entityservices.CommentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comments/")
public class CommentsController {
    private final CommentsService commentsService;

    @Autowired
    public CommentsController(CommentsService commentsService) {
        this.commentsService = commentsService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public CommentsEntity createComment(@RequestBody CommentsEntity comment) {
        return this.commentsService.createOrUpdate(comment);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "{id}")
    public void deleteComment(@PathVariable("id") Integer id) {
        this.commentsService.delete(id);
    }
}
