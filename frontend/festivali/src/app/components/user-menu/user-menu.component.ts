import { Component, OnInit } from '@angular/core';
import { User } from '../../domains/user';
import { LoginService } from '../../services/login.service';
import { Message } from '../../domains/message';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  private user : User;
  private messages : Message[];

  constructor(private loginService : LoginService, private messageService : MessageService) { 
    this.user = new User();
   }

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

}
