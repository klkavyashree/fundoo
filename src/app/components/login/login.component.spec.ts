import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BarRatingModule } from "ngx-bar-rating";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../service/userService/user.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: UserService
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FlexLayoutModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FroalaEditorModule, FroalaViewModule,
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
      ], providers: [UserService]

    })
      .compileComponents();
    service = TestBed.get(UserService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should be valid', async(() => {
   component.loginForm.controls['email'].setValue['kavyakl@gmail.com'];
   component.loginForm.controls['password'].setValue['123456']
   expect(component.loginForm.valid).toBeTruthy();
  }));
  it('Invalid Form', async(() => {
    expect(component.model.email.toEqual(''));
    expect(component.model.password.toEqual(''));
    expect(component.loginForm.valid).toBeFalsy();
  }));
  it('should call login', () => {
    const res = [{
      created: "2019-04-30T10:59:18.523Z",
      email: "manushree@gmail.com",
      firstName: "manu",
      id: "iiFgO8MQVwX9S1ny5xwDCRg8uIoLiUV2TR4op94sZCIaAbPDbIPzENLQOLNkxgve",
      imageUrl: "images/1555399203112blob",
      lastName: "shree",
      role: "user",
      ttl: 1209600,
      userId: "5c9cb6faea53620040e865ed"
    }]
    const model = {
      "email": "manushree@gmail.com",
      "password":"123456",
      "cartId":"66767677777778889"

    }

    let data
    spyOn(service, 'login').and.returnValue(of(res))
    service.login(model).subscribe(responce => {
      console.log(responce,"res");
      
      data = responce;
      console.log(data,"login");
      
      localStorage.setItem('token', data.id);
      console.log(data,"data")
    });
    expect(data).toEqual(res)
    console.log(service.login(model))
  })
});
