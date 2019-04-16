import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/productCart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
service:string='';
advance:any;
basic:any;
selected:any;
cond:string='signin'

  constructor(public cart:CartService) { }

  ngOnInit() {
    this.service=localStorage.getItem('service');
    this.getUserService()
    
  }
  getUserService(){
    this.cart.getUserService().subscribe(data=>{
      if(data['data']['data'].length>0){
        this.advance=data['data']['data'][0]
        this.basic=data['data']['data'][1]
     
        if(this.service=='advance'){
            this.selected=this.advance
        }
        else{
            this.selected=this.basic
        }
        console.log(this.selected,"selected")
      }
   
    })
  
  }


}
