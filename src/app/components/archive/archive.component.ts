import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../service/noteservice/note.service'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

card=[];
archivedCard=[];
archived=[];


  constructor(private note:NoteService) { }

  ngOnInit() {
    this.getArchiveCards()
  }
  getArchiveCards(){
    this.note.getArchiveNotes().subscribe(data=>{
      console.log(data,'getall cards')
        this.archivedCard = data['data']['data']; 
        for(let index=0;index<this.archivedCard.length;index++){
          if(this.archivedCard[index].isDeleted==false){
            this.archived.push(this.archivedCard[index])
          }
        }      
    },
    err=>{
          console.log("error occur while getting cards ",err)
    })
  }
 
  delete($event) {
    let ind = this.archived.indexOf($event);
    this.archived.splice(ind, 1);
  }
  

}
