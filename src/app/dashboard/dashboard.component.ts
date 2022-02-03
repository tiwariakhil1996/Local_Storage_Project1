import { RegisterImg } from './../models/register-model';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {  RegisterModel } from '../models/register-model';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // viewData: viewModel[] = [];
  registerDetail = new RegisterModel();
  registerDetails: RegisterModel[] = [];
  registerImg: RegisterImg[] = [];



  constructor(
    private modalService: NgbModal,
    private router: Router,
    private toaster: ToastrService

  ) {

    // this.viewData = JSON.parse(localStorage.getItem('registerDetails')) || [];

  }
  ngOnInit() {
    this.displayForm();
  }

  deleteRow(id) {

    let userIndex
    //this.viewData = JSON.parse(localStorage.getItem('registerDetails')) || [];
    // this.registerDetail.find(element => element.user==this.registerDetail.id);
    this.registerDetails.forEach((element, index) => {
      console.log(index, element);

      if (id == element.id) {
        userIndex = index;
        console.log(userIndex);
      }
    });

    if (userIndex >=0) {
      console.log(userIndex);

      this.registerDetails.splice(userIndex, 1);
      localStorage.setItem('registerDetails', JSON.stringify(this.registerDetails));
    }
    alert("are you sure delete your data...")
  }


  displayForm() {

    this.registerDetails = JSON.parse(localStorage.getItem('registerDetails')) || [];
    console.log(this.registerDetails);
    this.registerImg = JSON.parse(localStorage.getItem('RegisterImg')) || [];
    console.log(this.registerImg);
    this.registerDetails.forEach(element => {
      this.registerImg.forEach(element1 => {
        if (element.id == element1.id) {
          element['image'] = element1.image;
        }
      });
    });
  }

  openBackDropCustomClass(content, user) {

    this.registerDetail = user;//data show in model use this line and store the data in user and display in ui
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    // this.viewData = JSON.parse(localStorage.getItem('registerDetails')) || [];

  }

  onupdate() {

    this.registerDetails = JSON.parse(localStorage.getItem("registerDetails")) || [];
    this.registerDetails.forEach((element, index) => {
      console.log(index, element);

      if (this.registerDetail.id == element.id) {
        this.registerDetails[index] = this.registerDetail;
        localStorage.setItem('registerDetails', JSON.stringify(this.registerDetails));
        //console.log(userIndex);
      }
    });
    this.registerDetail = new RegisterModel();
    this.router.navigate(['register']);
    
  }
}



