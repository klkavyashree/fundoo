import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteservice/note.service';
import { DataService } from '../../service/dataservice/data.service' 
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  arrayCard: any[];
   Search: string;
  destroy$: Subject<boolean> = new Subject<boolean>(); 
  constructor(private noteService : NoteService, private data: DataService ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.Search = message;
    })
    this.getNotes();
  }
  getNotes() {
   this.noteService.getNote()
   .pipe(takeUntil(this.destroy$))  
    .subscribe(data => {
        this.arrayCard = [];
        for (var i = data["data"]['data'].length - 1; i >= 0; i--) {
         
          this.arrayCard.push(data["data"]['data'][i])
        
      }
      console.log("Search card array ",this.arrayCard)
       
      }, error => {
        console.log(error);
      })
    }

    ngOnDestroy() {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
  }
}


