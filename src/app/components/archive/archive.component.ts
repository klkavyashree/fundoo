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
    try{
    this.note.getArchiveNotes().subscribe(data=>{
      console.log(data,'getall cards')
        this.archivedCard = data['data']['data']; 
        for(let index=0;index<this.archivedCard.length;index++){
          if(this.archivedCard[index].isDeleted==false){
            this.archived.splice(0,0,this.archivedCard[index])
          }
        }      
    },
    err=>{
          console.log("error occur while getting cards ",err)
    })
  }catch(err){
    console.log('something wrong happen')
  }
}
  delete($event) {
    try{
    let ind = this.archived.indexOf($event);
    this.archived.splice(ind, 1);
    }
    catch(err){
      console.log(err)
    }
  }
  

}
