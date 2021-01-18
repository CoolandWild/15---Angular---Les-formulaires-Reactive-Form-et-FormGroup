import { Injectable } from '@angular/core';
import { userForm } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userservice : userForm []= [];
  constructor() { }

  getuserservice():userForm[] {
    return this.userservice;
  }
  addUsers (userModel: userForm){
    this.userservice.push(userModel);

  }
}
