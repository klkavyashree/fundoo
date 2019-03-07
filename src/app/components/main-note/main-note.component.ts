import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteservice/note.service'

@Component({
  selector: 'app-main-note',
  templateUrl: './main-note.component.html',
  styleUrls: ['./main-note.component.scss']
})
export class MainNoteComponent implements OnInit {
  pinnedcard:any=[];
  addnote:any;
  constructor(private note:NoteService) { }

  ngOnInit() {
    this.getAllCards()
  }
  getAllCards(){
    this.note.getNote().subscribe(data=>{
        this.pinnedcard = data['data']['data'];
        console.log(this.pinnedcard,"pinnedcard")
    },
    err=>{
          console.log("error occur while getting cards ")
    })
  }
  recievemessage($event) {
    this.addnote = $event;
    console.log(this.addnote,"......addnote")
    this.pinnedcard.push(this.addnote)
  }

}
