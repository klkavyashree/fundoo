import { Component, OnInit } from '@angular/core';
import { Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/userService/user.service'
import {MatSnackBar} from '@angular/material';
import { CartService } from '../../service/productCart/cart.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  message = '';
  selected: '';
  hide = true;
  model: any;
  responce: any;
  message1='';
  advance:any;
  basic:any;
  service=''

  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required])
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirm = new FormControl('', [Validators.required]);
  

  constructor(private userService: UserService, private router: Router,  private snackBar: MatSnackBar,public cart:CartService) { }

  ngOnInit() {
    this.getUserService()
   this.service= localStorage.getItem('service')
   console.log(this.service,"service")
  }
 
  getUserService(){
    this.cart.getUserService().subscribe(data=>{
      if(data['data']['data'].length>0){
        this.advance=data['data']['data'][0]
        this.basic=data['data']['data'][1]
      }
    })
  }
/**
 * function is used to register the user
 */
  register() {
 

    try {
      this.model = {
        "firstName": this.firstname.value,
        "lastName": this.lastname.value,
        "phoneNumber": '',
        "imageUrl": '',
        "service": this.service,
        "email": this.username.value,
        "confirm": this.confirm.value,
        "cardId": '',
        "password": this.password.value,
      }

      if (this.firstname.value == '' || this.lastname.value == '' || this.username.value == '' || this.password.value == '' || this.confirm.value == '' || this.service == '') {
        this.message = "Fields are missing";
        
        return;
      }
      else {

        this.userService.register(this.model).subscribe(data => {

          this.responce=data;
           this.message1=this.responce.message;
          console.log(data);
          this.router.navigate(['login']);
        },
          err => {
            try{
              this.snackBar.open('UnSuccessful registration',"close", {
                duration: 3000
              });
            }catch(err){
              console.log(err)
            }
          })
      }
    }
    catch (err) {
      this.message="Something bad happened"
    }
     
  }
  login(){
    try{
    this.router.navigate(['login']);
  }catch(err){
    console.log(err)
  }
}
}
