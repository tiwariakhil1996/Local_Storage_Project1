import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abc';
  a="akhil tiwari";
  b="rajat singh";
  copyright="Sales Tracking System"
  //this is type scripting...
  constructor(
    private toaster:ToastrService
  
    ){}
}




