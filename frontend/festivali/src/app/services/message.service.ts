import { Injectable } from '@angular/core';
import { Message } from '../domains/message';
import { LoginService } from './login.service';
import { Http } from '@angular/http';

@Injectable()
export class MessageService {

  constructor(private http : Http, private loginService : LoginService) { }

  public markAsRead(msg : Message) {
    let url = "http://localhost:8080/api/messages/" + msg.msgId;
    return this.http.patch(url, '', {headers : this.loginService.generateAuthHeader()});
  }

}
