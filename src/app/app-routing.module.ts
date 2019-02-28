import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { NoteComponent } from './components/note/note.component';
import { EditLabelComponent } from './components/edit-label/edit-label.component'


const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch:'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path:'dashboard',
    component : DashboardComponent,
    children:[
      {
        path:'',
        redirectTo:'note',
        pathMatch:'full'
      },
      {
        path:'note',
        component:NoteComponent
      }
    ]
  },
  {
    path:'register',
    component : RegisterComponent
  },
  {
    path:'forgotpassword',
    component : ForgotpasswordComponent
  },
  {
    path:'resetpassword/:token',
    component : ResetpasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
