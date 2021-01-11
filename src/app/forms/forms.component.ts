import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user.service';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
    user :User;
    firstName = new FormControl();
    lastName  = new FormControl();
    email = new FormControl();
    passWord = new FormControl();
    street = new FormControl();
    zipCode = new FormControl();
    city = new FormControl();
    country = new FormControl();

    constructor(private userservice: UserService) {}

  ngOnInit(): void {
  }

  addnewUser () {
    this.user = new User()
    this.user.firstName= this.firstName.value;
    this.user.lastName =this.firstName.value;
    this.user.email=this.email.value;
    this.user.passWord=this.passWord.value;
    this.user.street=this.street.value;
    this.user.zipCode=this.zipCode.value;
    this.user.city=this.city.value;
    this.user.country=this.country.value;
  }

}
