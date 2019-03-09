import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpserviceService } from '../../service/httpservice.service';
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpasswordForm: FormGroup;
    hide=true;
    model:any;
    response:any;
    message='';
    localStorage:any;
    token:any;

  constructor(private formBuilder: FormBuilder,private httpService: HttpserviceService, private router: Router) { }

  ngOnInit() {
    this.resetpasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  
  get f() { return this.resetpasswordForm.controls; }

  onSubmit() {
    if (this.resetpasswordForm.invalid) {
        return;
    }
    else if(this.resetpasswordForm.get("password").value!=this.resetpasswordForm.get("confirmpassword").value){
         this.message="passwords should match"
          console.log(this.message)
    }
    else{
      this.model={
       newPassword:this.resetpasswordForm.get('password').value
      }
      console.log(this.model,'model')
      this.httpService.encodedPostForm(environment.resetpassword,this.model).subscribe(data =>{
        console.log('data ',data)
        this.router.navigate(['login']);
      },
      err =>{
        alert('something wrong happen');
        console.log(err)
      })
    }
}
}
