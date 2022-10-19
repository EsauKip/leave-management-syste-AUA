import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup:FormGroup|any
  constructor() { }

  ngOnInit(): void {
this.signup = new FormGroup({
  'fname':new FormControl(),
  'email':new FormControl(),
  'lname':new FormControl(),
  'password':new FormControl(),
  'phone':new FormControl(),
   
});

  }
signupdata(signup:FormGroup){
console.log(this.signup.value)
}
}
