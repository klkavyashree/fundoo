import { Injectable } from '@angular/core';
import { HttpserviceService } from '../../service/httpservice.service'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpserviceService) { }
  addToCart(data){
    return this.http.postJSON('productcarts/addToCart',data)
  }
  getUserService(){
    return this.http.getHttp('user/service')
  }
}
