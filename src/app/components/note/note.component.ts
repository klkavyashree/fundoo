import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../../service/httpservice.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {  Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  flag = true;
  flag1 = true;
  noteTitle = new FormControl('',[Validators.required,Validators.required]);
  noteContent = new FormControl('',[Validators.required,Validators.required]);
  model : any;
  responce: any;
   color: any = "#fafafa";
  constructor(private httpService: HttpserviceService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate([''])
  }

 

  @Output() messageEvent = new EventEmitter<string>();
 

   addNote(){
    this.flag = !this.flag;
   }

    
  //    this.flag = !this.flag;
   

     
  //    if(this.noteTitle  || this.noteContent )
  //    {
  //     this.model= {
  //        title : this.noteTitle.value,
  //        description : this.noteContent.value,
  //        labelIdList	: '',
  //        checklist   : '',
  //        isPined   : false,
  //        isArchived : false,
  //         color  : this.color,
  //         reminder : '',
  //         collaberators : ''
  //      }
  //       console.log("model data",this.model)
  //      this.httpService.encodedPostForm('notes/addNotes',this.model).subscribe(data =>{
  //       console.log("addNotes data",data);
  //       this.responce = data;
  //       console.log("id: ",this.responce.id );
  //       this.messageEvent.emit(this.model);
  //     },
  //     err =>
  //     {
  //       alert('Something went wrong ');
  //       console.log("error-------",err);   
  //     })
  //    }
     
  //  }
   Changes($event){ 
     this.color=$event;
     console.log("im reached in main card",this.color);
   }
   pinned(){
    this.flag1 = !this.flag1;
   }

  reverseFlag($event) {
    this.flag = !this.flag;
  
  }
 
}
