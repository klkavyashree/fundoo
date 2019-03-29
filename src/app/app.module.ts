import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { MainNoteComponent } from './components/main-note/main-note.component'
import { ReactiveFormsModule } from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterial } from './app.material.module';

import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { EditLabelComponent } from './components/edit-label/edit-label.component';
import { NoteComponent } from './components/note/note.component';
import { IconListComponent } from './components/icon-list/icon-list.component';
import { DisplayComponentComponent } from './components/display-component/display-component.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { SearchPipe } from './pipe/search.pipe';
import { SearchComponent } from './components/search/search.component';
import { DeleteForeverComponent } from './components/delete-forever/delete-forever.component';
import { LabeldialogComponent } from './components/labeldialog/labeldialog.component';
import { LabelsearchPipe } from './pipe/label/labelsearch.pipe';
import { RemainderComponent } from './components/remainder/remainder.component';
import { AuthGuard } from './service/authguard/auth.guard';
import { ColaboratorComponent } from './components/colaborator/colaborator.component';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    EditLabelComponent,
    NoteComponent,
    MainNoteComponent,
    IconListComponent,
    DisplayComponentComponent,
    UpdatenoteComponent,
    TrashComponent,
    ArchiveComponent,
    SearchPipe,
    SearchComponent,
    DeleteForeverComponent,
    LabeldialogComponent,
    LabelsearchPipe,
    RemainderComponent,
    ColaboratorComponent,
    
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    AppMaterial,
    HttpClientModule,
    NgxEditorModule
   
    
   
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
