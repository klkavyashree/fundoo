import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  
  postJSON(url:string, body:any): any{
    this.baseUrl+url;
    const httpOptions={
      headers : new HttpHeaders({
        'const-Type' :'application/json'
      })
    }
return this.http.post(url,body,httpOptions)
  }
  baseUrl="http://34.213.106.173/api/"
  static postRequest:any;
  constructor(private http:HttpClient) { }



  postRequest(url,data){
    console.log(data);
    return this.http.post(this.baseUrl+url, data);
  }

  
}







































