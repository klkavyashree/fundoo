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


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'note', pathMatch: 'full'},
      { path: 'note', component: MainNoteComponent}, 
      { path: 'trash', component: TrashComponent },
      { path:'search', component: SearchComponent },
      { path:'archive', component:ArchiveComponent }
    ]
  },
  { path: 'updatenote', component: UpdatenoteComponent },
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
