import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from '../../service/httpservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  model: any;
  response: any;
  message = '';

  constructor(private formBuilder: FormBuilder, private httpService: HttpserviceService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({//creating instance of formbuilder class
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  get f() { return this.loginForm.controls; }


  login() {
    this.model = {
      "email": this.loginForm.get('email').value,
      "password": this.loginForm.get('password').value
    }

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.httpService.postRequest('user/login', this.model).subscribe(data => {
        console.log("data", data);
        this.response = data;
        localStorage.setItem('token', this.response.id);
        var token = localStorage.getItem('token')
        console.log('token:',token)
        this.router.navigate(['dashboard']);
      }, err => {
        this.message = 'user not found';
        alert('somthing happen')
      });

    }

  }
  register(){
    this.router.navigate(['register']);
  }
  forgotpassword(){
    this.router.navigate(['forgotpassword']);
  }

}
