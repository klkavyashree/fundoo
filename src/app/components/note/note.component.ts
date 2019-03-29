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
  pinnedcard: any;

  bgcolor: any = "#FFFFFF";
  flag = true;
  flag1 = true;
  noteTitle = new FormControl('', [Validators.required, Validators.required]);
  noteContent = new FormControl('', [Validators.required, Validators.required]);
  model: any;
  response: any;
  label = [];
  id = [];
  notes = "note"
  message = "note"
  colaborator = [];
  isArchive: boolean = false;
  isPined = false;
  show = true;
  list: string = ''
  checklistOpen = [];
  checklistclose=[];
  constructor(private httpService: HttpserviceService, private router: Router, private note: NoteService) { }

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
    console.log(this.colaborator, "colaborator..... in note")
    try {
      this.flag = !this.flag;
      if (this.noteTitle || this.noteContent) {
        this.model = {
          title: this.noteTitle.value,
          description: this.noteContent.value,
          labelIdList: JSON.stringify(this.id),
          checklist: this.checklistOpen,
          isPined: this.isPined,
          isArchived: this.isArchive,
          color: this.bgcolor,
          reminder: '',
          collaberators: JSON.stringify(this.colaborator),
        }

        console.log("model data", this.model)

        this.note.addNote(this.model).subscribe(data => {
          console.log("response while adding note..", data);
          this.response = data;
          this.noteTitle.reset();
          this.noteContent.reset();
          this.bgcolor = '#FFFFFF';
          if (!this.response['status']['details'].isArchived) {
            this.addingNote.emit(this.response['status']['details'])
          }
          this.colaborator = [];
          this.label = [];
          this.isPined = false;
          this.checklistOpen=[];
        },
          err => {
            console.log("error occur while adding", err);
          })
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  /**
   * to reverse the flag 
   */
  ispinned() {
    this.flag1 = !this.flag1;
  }

  dopin(set) {
    this.isPined = set
  }
  showTick(event) {
    this.show = event
  }
  enter(event: any, list) {
    if (event.keyCode == 13) {
      this.addCheckList(list)
    }
    // console.log(this.checklist, "checklist")
  }
  addCheckList(list){
        this.checklistOpen.push(list)
        console.log(this.checklistOpen,"checklist open")
        this.list=''
  }
  /**
   * 
   * @param $event to take reverse the flag
   */
  reverseFlag() {
    try {
      this.flag = !this.flag;
    }
    catch (err) {
      console.log(err)
    }
  }
  /**
   * 
   * @param $event to recive event  from the template
   */
  recievemessage($event) {
    try {
      this.bgcolor = $event;
    }
    catch (err) {
      console.log(err)
    }
  }
  getLabel(event) {
    this.id.push(event.id)
    this.label.push(event.label)
  }

  getColab(event) {

    this.colaborator = event
    console.log(this.colaborator, "emit event colabbbbbbbbb")
  }
  archiveEvent(event) {
    this.isArchive = event;
  }

}
