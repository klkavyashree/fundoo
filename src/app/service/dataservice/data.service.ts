import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('');//it will always return the current value on subscription no need of callnext 
  //and ensure that it will always recieve recent data
  private labelMsg=new Subject<string>();
  currentMessage = this.messageSource.asObservable();//variable handles the data stream as an observable
  getLabel = this.labelMsg.asObservable();

  private image = new Subject<boolean>();
  currentImage = this.image.asObservable();

  private viewMsg = new Subject<boolean>();
  MessageView = this.viewMsg.asObservable();

  private addlabel = new Subject();
  currentLabel = this.addlabel.asObservable();

  private deleteLabel = new Subject();
  labelDelete = this.deleteLabel.asObservable();


  constructor() { }
  changeMessage(message: string) {
    console.log(message, "message")
    this.messageSource.next(message)
  }
  sendLabel(message: string){
    console.log(message,"in dataservice")
    this.labelMsg.next(message);
  }

  changeImage(message:boolean){
    console.log(message,"in data")
    this.image.next(message)
  }
  changeView(message:boolean){
    this.viewMsg.next(message)
  }
  labeltoAdd(message:any){
    this.addlabel.next(message)
  }
  labeltoDelete(message:any){
    this.deleteLabel.next(message)
  }

}