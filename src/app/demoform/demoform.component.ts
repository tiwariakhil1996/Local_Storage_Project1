import { Component, OnInit } from '@angular/core';
import { RegisterModel, RegisterImg, DemoModel, DemoImg } from '../models/register-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-demoform',
  templateUrl: './demoform.component.html',
  styleUrls: ['./demoform.component.scss']
})
export class DemoformComponent implements OnInit {
//this logic for store the country and state and city name...
countryList: Array<any> = [
  { name: 'India' ,  states: ['Maharashtra' ,'Gujarat','Rajasthan', 'U.P']},
  { name: 'Germany', states: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
  { name: 'Spain',   states: ['Barcelona'] },
  { name: 'USA',     states: ['Downers Grove'] },
];

stateList: Array<any> = [
  { states: 'Maharashtra', cities: ['Pune','Lonavala','Andheri'] },
  { states: 'Gujarat',     cities: ['Ahmedabad','Vadodara'] },
  { states: 'Rajasthan',   cities: ['Jaipur','Jodhpur'] },
  { states: 'U.P',         cities: ['Ballia','Kashi','Varanasi'] },
  { states: 'Duesseldorf', cities: ['Beijing','Abc'] },
  { states: 'Leinfelden-Echterdingen', cities: ['a','b'] },
  { states: 'Eschborn', cities: ['c','d'] },
  

];

name:   Array<any>;
states: Array<any>;
cities: Array<any>;

changeCountry(count) {
  this.states = this.countryList.find(con => con.name == count).states;
}

changeState(count1) {
  this.cities = this.stateList.find(con => con.states == count1).cities;
}

  signup = "Register";
  imageSrc:string='';
  //id:number=1;

  errorMessage = '';

  demoDetail = new DemoModel();
  demoDetails: DemoModel[] = [];

  demoImg = new DemoImg();
  demoImgs: DemoImg[] = [];

  constructor(

  private toaster: ToastrService
  ) { }

  ngOnInit() {

    //This logic for select and option tag...
    this.demoDetail.gender = 'Male';
    this.demoDetail.country = this.countryList[0].name;
    this.states = this.countryList.find(con => String(con.name).toLowerCase() == String(this.demoDetail.country).toLowerCase()).states;
    this.demoDetail.state = this.countryList[0].states[0];
    this.cities = this.stateList.find(con => con.states == this.demoDetail.state).cities;
    this.demoDetail.city = this.cities[0];

  }
  
  submitForm() {

    let strError = '';

    if (!this.demoDetail.firstname) {
      strError += '- Please enter first name';
    }
    else {
      if (!this.validatefirstname(this.demoDetail.firstname)) {
        strError += strError = '' ? '' : '<br/>';
        strError += strError = '- First name should be in alphabets';
      }
    }

    if (!this.demoDetail.lastname) {
      strError += strError = '' ? '' : '<br/>';
      strError += '- Please enter last name';
    }
    else {
      if (!this.validatelastname(this.demoDetail.lastname)) {
        strError += strError = '' ? '' : '<br/>';
        strError += strError = '- Last name should be in alphabets';
      }
    }

    if (!this.demoDetail.username) {
      strError += strError = '' ? '' : '<br/>';
      strError += '- Please enter valid username';
    }
    else {
      if (!this.validateusername(this.demoDetail.username)) {
        strError += strError = '' ? '' : '<br/>';
        strError += strError = '- Username should contain @ and . ';
      }
    }

    if (!this.demoDetail.email) {
      strError += strError = '' ? '' : '<br/>';
      strError += '- Please enter valid email id';
    }
    else {
      if (!this.validateemail(this.demoDetail.username)) {
        strError += strError = '' ? '' : '<br/>';
        strError += strError = '- Email should contain @ and . ';
      }
    }


    if (!this.demoDetail.gender) {
      strError += strError = '' ? '' : '<br/>';
      strError += '- Please select gender';
    }

    if (!this.demoDetail.mobile) {
      strError += strError = '' ? '' : '<br/>';
      strError += '- Please enter valid mobile number.';
    }
    else {
      if (!this.validatemobile(this.demoDetail.mobile)) {
        strError += strError = '' ? '' : '<br/>';
        strError += strError = '- Mobile no should be of 10 digits';
      }
    }
    // Password validation

    if (!this.demoDetail.password) {
      strError += '- Please enter valid password';
    }
    else {
      
      //console.log(this.passwordvalidation(this.registerDetail.password));
      
      if (!this.passwordvalidation(this.demoDetail.password)) {
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

    if (this.demoDetail.password == this.demoDetail.confirmpassword) {
      // alert("Matched");
      
      //this.registerDetail.id=this.id;
     

      this.demoDetails = JSON.parse(localStorage.getItem('demoDetails')) || [];
      //this code for id increment in the local storage..
      let maxId = 0;
      if (this.demoDetails.length > 0) {
        this.demoDetails.forEach(element => {
          if (element.id > maxId) {
            maxId = element.id
          }
        });
      }
      console.log(maxId);
      this.demoDetail.id = maxId + 1;
      this.demoDetails.push(this.demoDetail);
      localStorage.setItem('demoDetails', JSON.stringify(this.demoDetails));

      // Image logic
      this.demoImg.image = this.imageSrc;
      this.demoImg.id = maxId + 1;
      this.demoImgs = JSON.parse(localStorage.getItem('DemoImg')) || [];
      this.demoImgs.push(this.demoImg);
      localStorage.setItem('DemoImg', JSON.stringify(this.demoImgs));


      //this logic for select and option tag...
      this.demoDetail.country = this.countryList[0].name;
      this.states = this.countryList.find(con => String(con.name).toLowerCase() == String(this.demoDetail.country).toLowerCase()).states;
      this.demoDetail.state = this.countryList[0].states[0];
      this.cities = this.stateList.find(con => con.states == this.demoDetail.state).cities;
      this.demoDetail.city = this.cities[0];



      this.toaster.success('Registration Successful', 'Successful', {
        disableTimeOut: false,
        timeOut: 2000
      });
      // this code for submit the all data in the textbox and clear the alll data in the texbox.
      this.demoDetail = new DemoModel();



      //this.id++;

    }
    else {
      // alert("Not Matched");
      this.toaster.error('Password & Confirm Password didnt match', 'Error', {
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
    if (!this.validatefirstname(this.demoDetail.firstname)) {
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
    if (!this.validatelastname(this.demoDetail.lastname)) {
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
    if (!this.validateusername(this.demoDetail.username)) {
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
    if (!this.validateemail(this.demoDetail.email)) {
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
    if (!this.validatemobile(this.demoDetail.mobile)) {
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
