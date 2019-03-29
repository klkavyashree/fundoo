import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/userService/user.service'
import { MatSnackBar } from '@angular/material';


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

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private snackbar:MatSnackBar) { }

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
    try{
    if (this.loginForm.invalid) {
      return;
    }
    else {
      this.userService.login(this.model).subscribe(data => {
        console.log("data", data);
        this.response = data;
        localStorage.setItem('token', this.response.id);
        localStorage.setItem('userid',this.response.userId)
        localStorage.setItem('firstname',this.response.firstName)
        localStorage.setItem('lastname',this.response.lastName)
        localStorage.setItem('email',this.response.email)
        var token = localStorage.getItem('token')
        console.log('token:',token)
        this.router.navigate(['dashboard']);
        this.snackbar.open('login successful','close',{
          duration:1500
        })
      }, err => {
        console.log(err)
        this.snackbar.open('user not found','close',{
          duration:1500
        })
      });

    }}catch(err){
      console.log('error found')
    }

  }
  register(){
    try{
    this.router.navigate(['register']);
    }
    catch(err){
      console.log(err)
    }
  }
  forgotpassword(){
    try{
    this.router.navigate(['forgotpassword']);
    }
    catch(err){
      console.log(err)
    }
  }

}