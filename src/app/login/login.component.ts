
import { Component, OnInit } from '@angular/core';

import { RouterLink, Routes, Router } from '@angular/router';
import { loginModel, RegisterModel } from '../models/register-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signin = "Login";
  //this is a local storage variable...
  login:any = new loginModel();
  registerDetails: RegisterModel[] = [];
  registerDetail: any;
  

  constructor(
    private router: Router,
    private toaster:ToastrService
  ) { }

  ngOnInit() {
  }

  // loginForm() {
  //   var registerarray: loginModel[] = [];
  //   // console.log(this.register);
  //   if (localStorage.getItem('Register') !== undefined && localStorage.getItem('Register') !== null) {
  //     registerarray = JSON.parse(localStorage.getItem('Register'));
  //   }

  // }
  // loginForm() {
  //   console.log(this.login);

  //   this.registerDetails = JSON.parse(localStorage.getItem('registerDetails')) || [];
  //   this.registerDetails.forEach(element => {
  //   console.log(element);
  //     if (this.login.username == element.username  || this.login.email == element.email || this.login.mobile == element.mobile  &&  this.login.password == element.password) {
  //       console.log('match', element);
  //       // alert("login sucessfully:");
  //       this.router.navigate(['/dashboard']);
  //     }
  //     // else
  //     // {
  //     //   alert("login Invalid");
  //     //   return false;
  //     // }
  //   });
  //   //  const tempDetail: RegisterModel[] = this.registerDetails.filter(i => i.username == this.login.userName && i.password == this.login.password);
  //   // if (tempDetail.length > 0) {
  //   //   this.router.navigate(['register']);
  //   // }

  // }
  loginForm() {
    let isValid = false;
   
    this.registerDetails = JSON.parse(localStorage.getItem('registerDetails')) || [];
    this.registerDetails.forEach(element => {
      if (this.login.mobile == element.mobile  && this.login.password == element.password) {
        isValid = true;
      }
    });

    if (isValid) {
      this.toaster.success('Login Successful', 'Successful', {
        disableTimeOut: false,
        timeOut:3000

      });
      this.router.navigate(['/dashboard']);
    } else {
      this.toaster.warning('Please enter valid uname and pass', 'Warning', {
        disableTimeOut: false,
        timeOut:3000
      });
    }
  }
}

