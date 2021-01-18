import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { userForm } from "../userForm";
import { UserService } from '../user.service';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
    user :userForm;
    userForm = this.fb.group ({
    firstName : new FormControl(''),
    lastName  : new FormControl(''),
    email : new FormControl(''),
    passWord : new FormControl(''),
    street : new FormControl(''),
    zipCode : new FormControl(''),
    city : new FormControl(''),
    country : new FormControl('')
  })
  firstName: any;

    constructor(private userservice: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.userForm.value);
  }
  addnewUser () {
    this.user = new userForm();
    this.user.firstName= this.user.firstName;
    this.user.lastName =this.user.lastName;
    this.user.email=this.user.email;
    this.user.passWord=this.user.passWord;
    this.user.street=this.user.street;
    this.user.zipCode=this.user.zipCode;
    this.user.city=this.user.city;
    this.user.country=this.user.country;
  }

}
