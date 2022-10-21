import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $:any;



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor( private _route:Router, private _http:HttpClient) { }
signup:FormGroup|any
signuser:any;
  

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
// this.signuser = this.singup.value.fname
this._http.post<any>("http://localhost:3000/signup", this.signup.value)
.subscribe(res=>{
  alert('data added successfully');
  this.signup.reset();
  this._route.navigate(['login']);
}, err=>{
  alert('Somthing went wrong');
})
}
sbtn(){
   
  this._route.navigate(['login']);
  //$('.form-box1').css('z-index', '99');
  $('.form-box').css('display','block');
  $('.form-box1').css('display','none');
}
}
