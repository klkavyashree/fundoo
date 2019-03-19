import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteservice/note.service'
import { DataService } from '../../service/dataservice/data.service'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>(); 
arrayCard:any;
label:any;
  constructor(public noteService:NoteService, public dataService:DataService) { }

  ngOnInit() {
    this.dataService.getLabel.subscribe(message => {
      this.label=message;
      console.log(this.label,"label")
      this.getNotes()
    })
   
  }
  getNotes(){
    this.noteService.getNotesOfLabel(this.label.label).subscribe(data=>{
      this.arrayCard=data['data']['data'];
      this.arrayCard=this.arrayCard.reverse();
      console.log(this.arrayCard,"card in editlabel")
    })
  }
  
 
     ngOnDestroy() {
       this.destroy$.next(true);
       this.destroy$.unsubscribe();
   }
}
