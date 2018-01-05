import { Injectable } from '@angular/core';
import { User } from '../domains/user';
import { Role } from '../domains/role';

@Injectable()
export class UserService {

  constructor() { }

  public isAdimn(user : User) : boolean {
    for(let role of user.roles) {
      if(role.name == "ADMIN")
        return true;
    }
    return false;
  }
}
