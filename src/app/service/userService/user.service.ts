import { Injectable } from '@angular/core';
import { HttpserviceService } from '../../service/httpservice.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpserviceService) { }


  login(data){
    return this.http.postRequest('user/login',data)
  }
  register(data){
    return this.http.postRequest('user/userSignUp',data)
  }
  forgot(data){
    return this.http.postRequest('user/reset',data)
  }
  searchUserList(body:any){
    return this.http.postJSON('user/searchUserList',body)
  }
  uploadImg(data){
    return this.http.postImage('user/uploadProfileImage',data)
  }
}
