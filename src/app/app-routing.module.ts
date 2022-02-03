import { DemodashboardComponent } from './demodashboard/demodashboard.component';
import { DemoformComponent } from './demoform/demoform.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'formvalidation', component:FormvalidationComponent },
  { path: 'demoform', component:DemoformComponent },
  { path: 'demodashboard', component:DemodashboardComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
