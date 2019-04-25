import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpasswordComponent } from './forgotpassword.component';

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
describe('ForgotpasswordComponent', () => {
  let component: ForgotpasswordComponent;
  let fixture: ComponentFixture<ForgotpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotpasswordComponent ],imports:[
        FlexLayoutModule,FormsModule,BrowserAnimationsModule,HttpClientModule,FroalaEditorModule, FroalaViewModule,
        BarRatingModule,BrowserModule,ReactiveFormsModule,MatFormFieldModule,MatCardModule,MatInputModule,MatIconModule,
        RouterModule,MatSnackBarModule,RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
