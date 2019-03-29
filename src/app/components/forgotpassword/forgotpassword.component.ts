import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/userService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotpasswordForm: FormGroup;
    model:any;
    response:any;
    message='';
    
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    
  }
  get f() { return this.forgotpasswordForm.controls; }
  onSubmit() {
    this.model={
      "email":this.forgotpasswordForm.get("email").value
    }
  

    // stop here if form is invalid
    try{
    if (this.forgotpasswordForm.invalid) {
      return;
    }
    
    else{
      this.userService.forgot(this.model).subscribe(data => {
        this.response = data;
        console.log(data)
        this.message = this.response.message
      }, err => {
        alert('something wrong happen')
      })
    }}
    catch(err)
    {
      console.log("error occur in ")
    }

  }
  login(){
    this.router.navigate(['login']);
  }
}
