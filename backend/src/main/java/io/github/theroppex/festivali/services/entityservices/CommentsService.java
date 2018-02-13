package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.CommentsEntity;
import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.data.repositories.CommentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class CommentsService {
    private final CommentsRepository commentsRepository;

    @Autowired
    public CommentsService(CommentsRepository commentsRepository) {
        this.commentsRepository = commentsRepository;
    }

    public CommentsEntity createOrUpdate(CommentsEntity comment) {
        UsersEntity user = (UsersEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        comment.setUser(user);
        return this.commentsRepository.save(comment);
    }

    public void delete(CommentsEntity commentsEntity) {
        this.commentsRepository.delete(commentsEntity);
    }

    public void delete(Integer id) {
        this.commentsRepository.delete(id);
    }
}
