import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { DialogData } from '../../components/display-component/display-component.component';
import {MatSnackBar} from '@angular/material';
import { NoteService } from '../../service/noteservice/note.service'

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
flag1=true
show=false;
  constructor(public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private snackBar: MatSnackBar, public noteService:NoteService )
     {console.log(data['array'],"in dialog") }
  ngOnInit() {
    
  }
  addList($event){
    this.show=$event
  }
  enter(event,name){
    if (event.keyCode == 13){
      this.addCheckList(name)
    }
  }
  addCheckList(name){
    this.noteService.addCheckList({
      "itemName":name,
      "status":"open"
    })
  }
  getCheckList(noteid){
    this.noteService.getCheckList(noteid).subscribe(data=>{
      console.log(data)
    })
  }
  openSnackBar(){
    this.snackBar.open(' In trash u cannot edit',"restore", {
      duration: 3000
    });
  }
}
