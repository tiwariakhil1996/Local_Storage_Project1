import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { RegisterModel, RegisterImg } from '../models/register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  signup = "Register";
  imageSrc:string='';
  //id:number=1;
  errorMessage = '';

  registerDetail = new RegisterModel();
  registerDetails: RegisterModel[] = [];

  registerImg = new RegisterImg();
  registerImgs: RegisterImg[] = [];

  constructor(
    private toaster: ToastrService
  ) { }

  ngOnInit() {
  }

  // submitForm() {
  //   var registararray: RegisterModel[] = [];
  //   // console.log(this.register);
  //   if (localStorage.getItem('registerDetails') !== undefined && localStorage.getItem('registerDetails') !== null) {
  //     registararray = JSON.parse(localStorage.getItem('registerDetails'));
  //   }
  //   registararray.push(this.registerDetail);
  //   localStorage.setItem('registerDetails', JSON.stringify(registararray));
  // }

  // this is all submit form logic..

  // submitForm() {

  //   //Password and Confirm password validation...

  //   if (this.registerDetail.password == this.registerDetail.confirmpassword) {
  //         alert("Password match");
  //         this.toaster.success('Password matched and Register Successfully:', 'Success', {
  //           disableTimeOut: false,
  //           timeOut: 2000
  //         });    
  //       }
  //       else
  //       {
  //         this.toaster.warning('Password not matched', 'Warning', {
  //           disableTimeOut: false,
  //           timeOut: 2000,

  //         });  
  //       }

  //   // first name vlaidation 

  //   this.errorMassage='';
  //   if(!this.registerDetail.firstname && !this.registerDetail.lastname)
  //   {
  //     this.errorMassage="enter the valid information";
  //   }

  //   if(this.errorMassage)
  //   {
  //     return;
  //   }

  //   if (this.registerDetail.firstname == null || this.registerDetail.lastname == null || this.registerDetail.username == null || this.registerDetail.mobile == null || this.registerDetail.gender == null) {
  //     alert('Please fill all neccessary field');
  //     //this.errorMassage="please enter the field value";
  //     return true;
  //   }


  //   // check the password and confirm password validation..

  //   if (this.registerDetail.password == this.registerDetail.confirmpassword) {
  //     //alert("Password match");
  //     this.toaster.success('Password matched and Register Successfully:', 'Success', {
  //       disableTimeOut: false,
  //       timeOut: 2000
  //     }); 
  //   }
  //   else {
  //     //alert("password not matched");
  //     this.toaster.warning('Password not matched', 'Warning', {
  //       disableTimeOut: false,
  //       timeOut: 2000
  //     });  
  //     return false;

  //   }


  //   //gender validation

  //   var genderM=this.registerDetail.male;
  //   var genderF=this.registerDetail.female;

  //     if(genderM.checked==false && genderF.checked==false ) {
  //         alert("You must select male or female");
  //         return false;
  //     } 

  //   //Logic for using the JSON and Store the data in the local storage

  //   this.registerDetails = JSON.parse(localStorage.getItem('registerDetails')) || [];

  //   this.registerDetails.forEach(element => {
  //     console.log(element);

  //   });
  //   console.log(this.registerDetails);
  //   console.log(this.registerDetail);
  //   this.registerDetails.push(this.registerDetail);
  //   console.log(this.registerDetails);
  //   localStorage.removeItem('registerDetails');
  //   localStorage.setItem('registerDetails', JSON.stringify(this.registerDetails));
  // }

  submitForm() {

    let strError = '';

    if (!this.registerDetail.firstname) {
      strError += '- Please enter first name';
    }
    else {
      if (!this.validatefirstname(this.registerDetail.firstname)) {
        strError += strError = '' ? '' : '<br/>';
        strError += strError = '- First name should be in alphabets';
      }
    }

    if (!this.registerDetail.lastname) {
      strError += strError = '' ? '' : '<br/>';
      strError += '- Please enter last name';
    }
    else {
      if (!this.validatelastname(this.registerDetail.lastname)) {
        strError += strError = '' ? '' : '<br/>';
        strError += strError = '- Last name should be in alphabets';
      }
    }

    if (!this.registerDetail.username) {
      strError += strError = '' ? '' : '<br/>';
      strError += '- Please enter valid username';
    }
    else {
      if (!this.validateusername(this.registerDetail.username)) {
        strError += strError = '' ? '' : '<br/>';
        strError += strError = '- Username should contain @ and . ';
      }
    }

    if (!this.registerDetail.email) {
      strError += strError = '' ? '' : '<br/>';
      strError += '- Please enter valid email id';
    }
    else {
      if (!this.validateemail(this.registerDetail.username)) {
        strError += strError = '' ? '' : '<br/>';
        strError += strError = '- Email should contain @ and . ';
      }
    }


    if (!this.registerDetail.gender) {
      strError += strError = '' ? '' : '<br/>';
      strError += '- Please select gender';
    }

    if (!this.registerDetail.mobile) {
      strError += strError = '' ? '' : '<br/>';
      strError += '- Please enter valid mobile number.';
    }
    else {
      if (!this.validatemobile(this.registerDetail.mobile)) {
        strError += strError = '' ? '' : '<br/>';
        strError += strError = '- Mobile no should be of 10 digits';
      }
    }
    // Password validation

    if (!this.registerDetail.password) {
      strError += '- Please enter valid password';
    }
    else {
      
      //console.log(this.passwordvalidation(this.registerDetail.password));
      
      if (!this.passwordvalidation(this.registerDetail.password)) {
        strError += strError = '' ? '' : '<br/>';
        strError += strError = '- Your password must be between 6 and 20 characters at least one uppercase and one lowercase letter_one number digit one special character like $, #, @, !,%,^,&,*,(,)';
      }
    }
    
    if (strError !== '') {
      this.toaster.warning(strError, 'Warning', {
        disableTimeOut: false,
        timeOut: 5000,
        enableHtml: true,
        progressBar: true,
        closeButton: true,
      });
      return false;
    }


    //------------------------- Data Insertion- -------------

    // if (localStorage.getItem('Register') !== undefined && localStorage.getItem('Register') !== null) {
    //   registararray = JSON.parse(localStorage.getItem('Register'));
    //   isValid = true;
    // }
    // registararray.push(this.register);
    // localStorage.setItem('Register', JSON.stringify(registararray));


    // alert("Data Registered");

    // -----------------------------------------------------    

    if (this.registerDetail.password == this.registerDetail.confirmpassword) {
      // alert("Matched");
      
      //this.registerDetail.id=this.id;

      this.registerDetails = JSON.parse(localStorage.getItem('registerDetails')) || [];
      //this code for id increment in the local storage..
      let maxId = 0;
      if (this.registerDetails.length > 0) {
        this.registerDetails.forEach(element => {
          if (element.id > maxId) {
            maxId = element.id
          }
        });
      }
      console.log(maxId);
      this.registerDetail.id = maxId + 1;
      this.registerDetails.push(this.registerDetail);
      localStorage.setItem('registerDetails', JSON.stringify(this.registerDetails));
      

      // Image logic
      this.registerImg.image = this.imageSrc;
      this.registerImg.id = maxId + 1;
      this.registerImgs = JSON.parse(localStorage.getItem('RegisterImg')) || [];
      this.registerImgs.push(this.registerImg);
      localStorage.setItem('RegisterImg', JSON.stringify(this.registerImgs));

      this.toaster.success('Registration Successful', 'Successful', {
        disableTimeOut: false,
        timeOut: 2000
      });
      // this code for submit the all data in the textbox and clear the alll data in the texbox.
      this.registerDetail = new RegisterModel();
      //this.id++;

    }
    else {
      // alert("Not Matched");
      this.toaster.error('Password & Confirm Password didnt match', 'error', {
        disableTimeOut: false,
        timeOut: 2000
      });
    }

  }
  
  OnImageChange(e){
    var file = e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file)
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    //console.log(this.imageSrc)
  }

  // First name validation...
  firstnameValidation() {
    let isValid = false;
    if (!this.validatefirstname(this.registerDetail.firstname)) {
      // alert('Please enter valid name.')
      isValid = true;
    }
    if (isValid) {
      this.toaster.warning('Please enter the first name correctly', 'Warning', {
        disableTimeOut: false,
        timeOut: 2000,
        enableHtml: true
      });
    }
  }

  validatefirstname(nameField) {
    var reg = /^[A-Za-z]+$/;
    return reg.test(nameField) == false ? false : true;
  }

  //Last name validation
  lastnameValidation() {
    let isValid = false;
    if (!this.validatelastname(this.registerDetail.lastname)) {
      // alert('Please enter valid name.')
      isValid = true;

    }
    if (isValid) {
      this.toaster.warning('Please enter the last name correctly', 'Warning', {
        disableTimeOut: false,
        timeOut: 2000
      });
    }
  }
  validatelastname(nameField) {
    var reg = /^[A-Za-z]+$/;
    return reg.test(nameField) == false ? false : true;
  }
  //Username validation
  usernameValidation() {
    let isValid = false;
    if (!this.validateusername(this.registerDetail.username)) {
      isValid = true;
    }
    if (isValid) {
      this.toaster.warning('Please enter the correct username', 'Warning', {
        disableTimeOut: false,
        timeOut: 2000
      });
    }
  }
  validateusername(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(emailField) == false ? false : true;
  }

  // Email validation 
  checkEmailValidation() {
    let isValid = false;
    if (!this.validateemail(this.registerDetail.email)) {
      isValid = true;
    }
    if (isValid) {
      this.toaster.warning('Please enter the valid email id', 'Warning', {
        disableTimeOut: false,
        timeOut: 2000
      });
    }
  }
  validateemail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(emailField) == false ? false : true;
  }

  //mobile validation 
  mobilevalidation() {
    let isValid = false;
    if (!this.validatemobile(this.registerDetail.mobile)) {
      // alert('Please enter valid mobile no..')
      isValid = true;
    }
    if (isValid) {
      this.toaster.warning('Please enter the mobile number correctly', 'Warning', {
        disableTimeOut: false,
        timeOut: 2000
      });
    }
  }
  validatemobile(mobileField) {
    var reg = /^\d{10}$/;
    return reg.test(mobileField) == false ? false : true;
  }

  // Password Validation

  passwordvalidation(passwordField) {
    var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return reg.test(passwordField);
  }

  // passwordvalidation(passwordField) {
  //      var reg = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;
  //   return reg.test(passwordField) == false ? false : true;
  // }



  // first name validation...

  // firstnameValidation() {

  //   if (!this.validateName(this.registerDetail.firstname)) {
  //     // alert('Please enter valid name.')
  //     this.errorMessage = "Please enter valid name";
  //   } setTimeout(() => {
  //     this.errorMessage = '';
  //   }, 20000);
  // }



  // // Password validation 
  // passValidation(passField) {
  //   var reg = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;
  // if (passField.value.match(reg)) {
  //     // alert('Correct, try another...')
  //     this.errorMessage = "Correct, try another...";
  //     return true;
  //   }
  // else {
  //     // alert('Wrong...!')
  //     this.errorMessage = "Wrong.. !";
  //     return false;
  //   }
  // }

  // passwordValidation() {
  //   let isValid = false;
  //   if (this.registerDetail.password == this.registerDetail.confirmpassword) {
  //     // alert("Password match");
  //     isValid = true;
  //   }
  //   if (isValid) {
  //     this.toaster.warning('Password not matched', 'Warning', {
  //       disableTimeOut: false,
  //       timeOut: 2000
  //     });
  //   }
  // }

}