import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userservice : User []= [];
  constructor() { }

  getuserservice():User[] {
    return this.userservice;
  }
  addUsers (userModel: User){
    this.userservice.push(userModel);

  }
}
