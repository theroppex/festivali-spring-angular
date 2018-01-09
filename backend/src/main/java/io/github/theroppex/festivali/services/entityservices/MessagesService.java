package io.github.theroppex.festivali.services.entityservices;

import io.github.theroppex.festivali.data.entities.MessagesEntity;
import io.github.theroppex.festivali.data.entities.UsersEntity;
import io.github.theroppex.festivali.data.repositories.MessagesRepository;
import io.github.theroppex.festivali.data.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessagesService {
    @Autowired
    UsersRepository usersRepository;

    @Autowired
    MessagesRepository messagesRepository;

    public void unicast(Integer userId, String message) {
        MessagesEntity msg = new MessagesEntity();
        msg.setSeen(false);
        msg.setText(message);

        UsersEntity dest = usersRepository.findOne(userId);
        if(dest == null)
            return;

        dest.addMessage(msg);
        this.usersRepository.save(dest);
    }

    public void markAsRead(Integer msgId) {
        MessagesEntity msg = this.messagesRepository.findOne(msgId);
        if(msg == null)
            return;

        msg.setSeen(true);
        this.messagesRepository.save(msg);
    }
}
