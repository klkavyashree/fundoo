import { Injectable } from '@angular/core';
import { HttpserviceService } from '../../service/httpservice.service'
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpserviceService) { }
  addToCart(data){
    return this.http.postService('productcarts/addToCart',data)
  }
  getUserService(){
    return this.http.getService('user/service')
  }
  getCartDetails(id){
    return this.http.getHttp('productcarts/getCartDetails/'+id)
  }
 placeOrder(data){
    return this.http.postJSON('productcarts/placeOrder',data)
 }
 getMyCart(){
   return this.http.getHttp('productcarts/myCart')
 }
}
