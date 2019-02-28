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

  getEncodedData(toConvert){
    const formBody=[];
    for(const property in toConvert){
      const encodeKey=encodeURIComponent(property);
      const encodedValue=encodeURIComponent(toConvert[property]);
      formBody.push(encodeKey + '=' +encodedValue);
    }
    return formBody.join('&');
  }

  getRequest(url,data){
    console.log("get request");
    console.log(data);

    return this.http.get(this.baseUrl+url,data);
}
  postHeader(url:any,data:any){
    url=this.baseUrl+url;
    const httpOptions={
      headers:new HttpHeaders({
        'content-Type':'application/x-www-form-urlencoded',
        'Authorization':localStorage.getItem('Item')
      })
    }
    return this.http.post(url,httpOptions);
  }
  getHttp(url){
    const httpTocken={
      headers:new  HttpHeaders({
        'content-Type':'application/json',
        'Authorization':localStorage.getItem('tocken')
      })
    }
    return this.http.get(this.baseUrl+url.httpTocken);
  }
  encodedPostForm(url: any, data: any){
    url=this.baseUrl+url;
    const httpOptions ={
      headers : new HttpHeaders({
      'content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : localStorage.getItem('token')
    })
    }
    return this.http.post(url, this.getEncodedData(data),httpOptions);
  }

  encodedGetForm(url: any) {
    url = this.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };
    return this.http.get(url, httpOptions)
}
}







































