import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { MainNoteComponent } from './components/main-note/main-note.component'
import { UpdatenoteComponent } from './components/updatenote/updatenote.component'
import { EditLabelComponent } from './components/edit-label/edit-label.component'
import { TrashComponent } from './components/trash/trash.component'
import { SearchComponent } from './components/search/search.component'
import { ArchiveComponent } from './components/archive/archive.component'
import { DeleteForeverComponent } from './components/delete-forever/delete-forever.component'
import { LabeldialogComponent } from './components/labeldialog/labeldialog.component'
import { RemainderComponent } from './components/remainder/remainder.component';
import { AuthGuard } from './service/authguard/auth.guard';
import { ColaboratorComponent } from './components/colaborator/colaborator.component';
import { ImagecropComponent } from './components/imagecrop/imagecrop.component'
import { AskQuestionComponent } from './components/ask-question/ask-question.component'
import { PackageServiceComponent } from './components/package-service/package-service.component';
import {CartDetailsDialogComponent} from './components/cart-details-dialog/cart-details-dialog.component'
import { CartComponent } from './components/cart/cart.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'package',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
      path:'package',
      component:PackageServiceComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,canActivate:[AuthGuard],
    children: [
      { path: '', redirectTo: 'note', pathMatch: 'full'},
      { path: 'note', component: MainNoteComponent}, 
      { path: 'trash', component: TrashComponent },
      { path:'search', component: SearchComponent },
      { path:'archive', component:ArchiveComponent },
      { path:'labels',component:EditLabelComponent },
      { path:'reminders', component:RemainderComponent},
      { path:'askquestion', component:AskQuestionComponent},
      { path: 'cart', component:CartComponent }
    ]
  },
  { path: 'updatenote', component: UpdatenoteComponent },
  { path:'delete', component: DeleteForeverComponent },
  { path:'labeldialog', component:LabeldialogComponent },
  { path:'colaborator', component:ColaboratorComponent},
  { path:'imagecroper', component:ImagecropComponent},
  { path: 'cart', component:CartDetailsDialogComponent },
  
  
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'resetpassword/:token',
    component: ResetpasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
