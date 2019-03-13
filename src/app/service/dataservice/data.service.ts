import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new Subject();
  private msgSource = new BehaviorSubject(false);//it will always return the current value on subscription no need of callnext 
  //and ensure that it will always recieve recent data
  private idSource = new Subject();
  currentMsg = this.msgSource.asObservable();//variable handles the data stream as an observable
  currentMessage = this.messageSource.asObservable();
  idSourceMsg = this.idSource.asObservable()
  constructor() { }
  changeMessage(message: string) {
    console.log(message, "message")
    this.messageSource.next(message)
  }
  sendMessage(message: boolean) {
    this.messageSource.next(message)
  }
  deleteMessage(message: boolean) {
    this.messageSource.next(message)
  }
  idMessage(message: string) {
    this.idSource.next(message);

  }
}