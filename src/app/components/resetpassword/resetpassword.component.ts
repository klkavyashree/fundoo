import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpserviceService } from '../../service/httpservice.service';
import { MatSnackBar } from '@angular/material';
import { Duration } from 'ngx-bootstrap/chronos/duration/constructor';



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

  constructor(private formBuilder: FormBuilder,private httpService: HttpserviceService, private route:ActivatedRoute,private router:Router,public snackbar:MatSnackBar ) { }

  ngOnInit() {
    this.resetpasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  public access_token=this.route.snapshot.params.id;
  get f() { return this.resetpasswordForm.controls; }

  onSubmit() {

localStorage.setItem('access_token',this.access_token)

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
      this.httpService.postPassword(this.model,this.access_token).subscribe(data =>{
        console.log('data ',data)
        this.router.navigate(['login']);
      },
      err =>{
        this.snackbar.open("error occur","close",
        {duration:1500})
        console.log(err)
      })
    }
}
}
