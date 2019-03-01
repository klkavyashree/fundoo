import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('');//it will always return the current value on subscription no need of callnext 
  //and ensure that it will always recieve recent data
  currentmessage=this.messageSource.asObservable();//variable handles the data stream as an observable

  constructor() { }
  changecolor(message:string){
    this.messageSource.next(message)
  }
}
