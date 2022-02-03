import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

//lmport the library for local storage-->webstorage and localstorage...
import { StorageModule } from '@ngx-pwa/local-storage';
import {FormsModule}  from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { DemoformComponent } from './demoform/demoform.component';
import { DemodashboardComponent } from './demodashboard/demodashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    FormvalidationComponent,
    DemoformComponent,
    DemodashboardComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbAlertModule,
    //toaster library
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut:1000,
      positionClass:'toast-top-right',
      preventDuplicates:false
    }
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
