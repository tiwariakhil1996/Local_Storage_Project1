import { Component, OnInit } from '@angular/core';
import { DemoModel, DemoImg } from '../models/register-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-demodashboard',
  templateUrl: './demodashboard.component.html',
  styleUrls: ['./demodashboard.component.scss']
})
export class DemodashboardComponent implements OnInit {
  
  
  demoDetail = new DemoModel();
  demoDetails: DemoModel[] = [];

  demoImg: DemoImg[] = [];
  

  constructor(
    
    private modalService: NgbModal,
    private router: Router,
    private toaster: ToastrService

  ) { 

    
  }

  ngOnInit() {
    this.displayForm();
  }
  deleteRow(id) {

    let userIndex
    //this.viewData = JSON.parse(localStorage.getItem('registerDetails')) || [];
    // this.registerDetail.find(element => element.user==this.registerDetail.id);
    this.demoDetails.forEach((element, index) => {
      console.log(index, element);

      if (id == element.id) {
        userIndex = index;
        console.log(userIndex);
      }
    });

    if (userIndex >=0) {
      console.log(userIndex);

      this.demoDetails.splice(userIndex, 1);
      localStorage.setItem('demoDetails', JSON.stringify(this.demoDetails));
    }
    alert("are you sure delete your data...")
  }


  displayForm() {

    this.demoDetails = JSON.parse(localStorage.getItem('demoDetails')) || [];
    console.log(this.demoDetails);
    this.demoImg = JSON.parse(localStorage.getItem('DemoImg')) || [];
    console.log(this.demoImg);
    this.demoDetails.forEach(element => {
      this.demoImg.forEach(element1 => {
        if (element.id == element1.id) {
          element['image'] = element1.image;
        }
      });
    });
  }

  openBackDropCustomClass(content, user) {

    this.demoDetail = user;//data show in model use this line and store the data in user and display in ui
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    // this.viewData = JSON.parse(localStorage.getItem('registerDetails')) || [];

  }

  onupdate() {

    this.demoDetails = JSON.parse(localStorage.getItem("demoDetails")) || [];
    this.demoDetails.forEach((element, index) => {
      console.log(index, element);

      if (this.demoDetail.id == element.id) {
        this.demoDetails[index] = this.demoDetail;
        localStorage.setItem('demoDetails', JSON.stringify(this.demoDetails));
        //console.log(userIndex);
      }
    });
    this.demoDetail = new DemoModel();
    this.router.navigate(['register']);
    
  }
}
