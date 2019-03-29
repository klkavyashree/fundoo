import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseUrl = environment.baseUrl;
  static postRequest: any;
  constructor(private http: HttpClient) { }



  postJSON(url: string, body: any): any {
    url=this.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(url, body, httpOptions)
  }

  encode(data) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

  

  encodedPostForm(url: any, data: any) {
    url = this.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.post(url, this.encode(data), httpOptions);
  }
  encodedPostFormDelete(url: any) {
    url = this.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('token')
      })
    }
    return this.http.delete(url, httpOptions);
  }

  postRequest(url, data) {
    console.log(data);
    return this.http.post(this.baseUrl + url, data);
  }
  
  getHttp(url){
    const httpTocken={
    headers:new HttpHeaders({
    'content-Type':'application/json',
    'Authorization':localStorage.getItem('token')
    })
    }
    return this.http.get(this.baseUrl+url,httpTocken);
    }
}







































