import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {DialogData } from '../package-service/package-service.component'
import { Router } from '@angular/router'
@Component({
  selector: 'app-cart-details-dialog',
  templateUrl: './cart-details-dialog.component.html',
  styleUrls: ['./cart-details-dialog.component.scss']
})
export class CartDetailsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CartDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public router:Router ) { }

  ngOnInit() {
  }
  /**
   * navigate to pakage page
   */
  remove(){
    try{
      this.router.navigate(['package'])
    }catch(err){
      console.log(err)
    }
  }
  /**
   * navigate to the registration page
   */
  proceed(){
    try{
    this.router.navigate(['register'])
    }catch(err){
      console.log(err)
    }
  }

}
