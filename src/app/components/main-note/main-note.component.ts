import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteservice/note.service';
import { DataService } from '../../service/dataservice/data.service';

@Component({
  selector: 'app-main-note',
  templateUrl: './main-note.component.html',
  styleUrls: ['./main-note.component.scss']
})
export class MainNoteComponent implements OnInit {
  allcards=[];
  card=[];
  addnote:any;
  constructor(private note:NoteService, private dataService:DataService) { }

  ngOnInit() {
      this.getAllCards()
  }
  getAllCards(){
    this.note.getNote().subscribe(data=>{
      console.log(data,'getall cards')
        this.card = data['data']['data'];
        for(let index=0;index<this.card.length;index++){
          if(this.card[index].isDeleted==false && this.card[index].isArchived==false){
            this.allcards.push(this.card[index])
            console.log(this.allcards,"all cardss")
          }
        }
           
    },
    err=>{
          console.log("error occur while getting cards ",err)
    })
  }
  recievemessage($event) {
    this.addnote = $event;
    console.log(this.addnote,"......addnote")
    this.allcards.push(this.addnote)
  }

 

}
