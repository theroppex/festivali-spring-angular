import { Component, OnInit } from '@angular/core';
import { User } from '../../domains/user';
import { LoginService } from '../../services/login.service';
import { Message } from '../../domains/message';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  private user : User = new User();
  private messages : Message[];

  constructor(private loginService : LoginService, private messageService : MessageService) { }

  ngOnInit() {
    this.loginService.getPrincipal().subscribe(
      res => {
        this.user = <User> res.json();
        
        this.messageService.getUserMessages(this.user).subscribe(
          res => {
            this.messages = <Message[]> res.json();
          }
        );
      }
    );
  }

  markAsRead(msg : Message) {
    this.messageService.markAsRead(msg).subscribe(
      res => {
        location.reload();
      }
    );
  }

}
