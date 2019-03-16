import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../../service/httpservice.service';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NoteService } from '../../service/noteservice/note.service'
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  pinnedcard:any;
  bgcolor:any="#FFFFFF";
  flag = true;
  flag1 = true;
  noteTitle = new FormControl('', [Validators.required, Validators.required]);
  noteContent = new FormControl('', [Validators.required, Validators.required]);
  model: any;
  response: any;
  constructor(private httpService: HttpserviceService, private router: Router, private note:NoteService) { }

  ngOnInit() {
 
  }
/**
 * @output to emit the event
 */
  
  @Output() addingNote = new EventEmitter();
  /**
   * addNote() to send all the details into the server
   */
  addNote() {
    this.flag = !this.flag;
    if (this.noteTitle || this.noteContent) {
      this.model= {
               title : this.noteTitle.value,
               description : this.noteContent.value,
               labelIdList	: '',
               checklist   : '',
               isPined   : false,
               isArchived : false,
                color  : this.bgcolor,
                reminder : '',
                collaberators : ''
            }

          console.log("model data",this.model)
         this.note.addNote(this.model).subscribe(data =>{
          console.log("response while adding..",data);
          this.response = data;
          this.noteTitle.reset();
          this.noteContent.reset();
          this.bgcolor='#FFFFFF';
          this.addingNote.emit(this.response['status']['details'])
        },
        err =>
        {
          console.log("error occur while adding",err);   
        })
       }
    }
 /**
  * to reverse the flag 
  */
  ispinned() {
    this.flag1 = !this.flag1;
  }
/**
 * 
 * @param $event to take reverse the flag
 */
  reverseFlag() {
    this.flag = !this.flag;
  }
  /**
   * 
   * @param $event to recive event  from the template
   */
  recievemessage($event) {
    this.bgcolor = $event;
  }

}
// 