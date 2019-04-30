import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/dataservice/data.service'
import { NoteService } from '../../service/noteservice/note.service'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private dataService:DataService, private note:NoteService) { }
deletedcards=[];
card=[];
trash='trash'
  ngOnInit() {
   this.getAllCards()
  }
  getAllCards(){
    this.note.getTrashNotes().subscribe(data=>{
      console.log(data,'getdeleted cards')
        this.deletedcards = data['data']['data'];  
        this.deletedcards.reverse();    
    },
    err=>{
          console.log("error occur while getting cards ",err)
    })
  }
  deleteNote(card){
    this.note.deleteForever({
        "isDeleted":true,
        "noteIdList":[card.id]
    }).subscribe(data=>{
      console.log(data,"response when delete");
      let ind=this.card.indexOf(card)
      this.deletedcards.splice(ind,1);
    },err=>console.log(err))
  }
  restore(array){
    this.note.deleteNote({
      "isDeleted":false,
      "noteIdList":[array.id]
    }).subscribe(data=>{
      console.log(data,"response when restore");
      let index=this.deletedcards.indexOf(array)
      this.deletedcards.splice(index,1);
    },err=>console.log(err))
  }
  
}
