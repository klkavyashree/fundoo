import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatInputModule } from '@angular/material';
import { DebugElement } from '@angular/core';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement
  let el: HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        MatFormFieldModule,
        MatCardModule,
        FormsModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatIconModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatInputModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should be invalid'), async(() => {
    expect(component.model.firstName.toEqual(''));
    expect(component.model.lastName.toEqual(''));
    expect(component.model.email.toEqual(''))
    expect(component.model.password.toEqual(''))
    expect(component.model.password.toEqual('1234'))
    expect(component.model.confirmpassword.toEqual(''))
  })
  it('Invalid Form'), async(() => {
    expect(component.model.password.toEqual('kavya'));
    expect(component.model.password.toEqual('shree'));
    expect(component.model.email.toEqual('kavyakl@gmail.com'));
    expect(component.model.password.toEqual('123456'));
    expect(component.model.password.toEqual('123456'));
  })
});
