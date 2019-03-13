import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from '../../service/httpservice.service';
import { environment } from '../../../environments/environment'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  model: any;
  response: any;
  message = '';

  constructor(private formBuilder: FormBuilder, private httpService: HttpserviceService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]]
    }
    );
  }
  get f() { return this.registerForm.controls; }

  register() {
    try {
      this.model = {
        "firstName": this.registerForm.get('firstName').value,
        "lastName": this.registerForm.get('lastName').value,
        // "imageUrl":"",
        "service": "advance",
        // "createdDate": "",
        // "modifiedDate": "",
        "email": this.registerForm.get('email').value,
        "password": this.registerForm.get('password').value,
        "confirmpassword": this.registerForm.get('confirmpassword').value,
      }

      // stop here if form is invalid
      if (this.registerForm.invalid ) {
        return;
      }
      else if(this.registerForm.get("password").value!=this.registerForm.get("confirmpassword").value){
        this.message="passwords should match"
         console.log(this.message)
   }

      else {
        this.httpService.postRequest(environment.userregister, this.model).subscribe(data => {
          this.response = data;
          console.log(data)
          this.message = this.response.message
          this.router.navigate(['login']);
        }, err => {
          alert('something wrong happen')
        })

      }
    }
    catch (err) {
      console.log("")
    }
  }
  login(){
    this.router.navigate(['login']);
  }
}
