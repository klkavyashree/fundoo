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
archive="archive"

  constructor(private note:NoteService) { }

  ngOnInit() {
    this.getArchiveCards()
  }
  /**
   * this function will get all the cards from the card array
   */
  getArchiveCards(){
    try{
    this.note.getArchiveNotes().subscribe(data=>{
        this.archivedCard = data['data']['data']; 
        for(let index=0;index<this.archivedCard.length;index++){
          if(this.archivedCard[index].isDeleted==false){
            this.archived.push(this.archivedCard[index])
          }
        } 
        this.archived.reverse();     
    },
    err=>{
          console.log("error occur while getting cards ",err)
    })
  }catch(err){
    console.log('something wrong happen')
  }
}
/**
 * 
 * @param $event will get the delteted list details and delte it from the list of checklists
 */
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
