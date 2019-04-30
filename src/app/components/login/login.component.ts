import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/userService/user.service'
import { MatSnackBar } from '@angular/material';
import { CartService } from '../../service/productCart/cart.service';

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
  service: string='';
  advance:any;
  basic:any;
  cartid:any;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private snackbar: MatSnackBar, public cart:CartService) { }

  ngOnInit() {
    this.getUserService()
    this.service = localStorage.getItem('service')
    console.log(this.service,"service...........")
    this.loginForm = this.formBuilder.group({//creating instance of formbuilder class
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


  }
  get f() { return this.loginForm.controls; }

  getUserService(){
    this.cart.getUserService().subscribe(data=>{
      console.log(data)
      if(data['data']['data'].length>0){
      this.advance=data['data']['data'][0]
      this.basic=data['data']['data'][1]}
    })
  }
  
  login() {
    this.model = {
      "email": this.loginForm.get('email').value,
      "password": this.loginForm.get('password').value,
      "cartId":localStorage.getItem('cartid')

    }

    // stop here if form is invalid
    try {
      if (this.loginForm.invalid) {
        return;
      }
      else {
        this.userService.login(this.model).subscribe(data => {
          console.log(data, "resp in login");
          this.response = data;
          localStorage.setItem('token', this.response.id);
          localStorage.setItem('userid', this.response.userId)
          localStorage.setItem('firstname', this.response.firstName)
          localStorage.setItem('lastname', this.response.lastName)
          localStorage.setItem('email', this.response.email)
          localStorage.setItem('imageurl', this.response.imageUrl)
          var token = localStorage.getItem('token')
          console.log('token:', token)
          this.router.navigate(['dashboard']);
          this.snackbar.open('login successful', 'close', {
            duration: 1500
          })
        }, err => {
          console.log(err)
          this.snackbar.open('user not found', 'close', {
            duration: 1500
          })
        });

      }
    } catch (err) {
      console.log('error found')
    }

  }
  register() {
    try {
      localStorage.clear();
      this.router.navigate(['package']);
    }
    catch (err) {
      console.log(err)
    }
  }
  forgotpassword() {
    try {
      this.router.navigate(['forgotpassword']);
    }
    catch (err) {
      console.log(err)
    }
  }

}