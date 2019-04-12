import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CartService } from '../../service/productCart/cart.service';
import { MatDialog } from '@angular/material';
import {CartDetailsDialogComponent} from '../cart-details-dialog/cart-details-dialog.component'
export interface DialogData{
  cart:any
}
@Component({
  selector: 'app-package-service',
  templateUrl: './package-service.component.html',
  styleUrls: ['./package-service.component.scss']
})
export class PackageServiceComponent implements OnInit {

  constructor(public router: Router, public cart: CartService, public dialog:MatDialog) { }
advance:any;
basic:any;
  ngOnInit() {
    this.getUserService()
  }
getUserService(){
  this.cart.getUserService().subscribe(data=>{
    console.log(data)
    if(data['data']['data'].length>0){}
    this.advance=data['data']['data'][0]
    this.basic=data['data']['data'][1]
  })
}


  login() {
    this.router.navigate(['login'])
  }
  opendialog(cart) {
    this.cart.addToCart({ "productId": cart.id }).subscribe(data => {
      console.log(data)
    })
    const dialogRef = this.dialog.open(CartDetailsDialogComponent, {
      data: { cart },
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result=>{

    })

  }
}
