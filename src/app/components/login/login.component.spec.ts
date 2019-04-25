import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BarRatingModule } from "ngx-bar-rating";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule} from '@angular/material';
import { MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
        FlexLayoutModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FroalaEditorModule,FroalaViewModule,
        BarRatingModule,
        BrowserModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        RouterModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Form should be valid'),async(()=>{
    expect (component.model.email.toEqual('kavyakl@gmail.com'));
    expect (component.model.password.toEqual('123456'));
  })
  it('Invalid Form'),async(()=>{
expect (component.model.email.toEqual(''));
expect (component.model.password.toEqual(''));
  })
});
