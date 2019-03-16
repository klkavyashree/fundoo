import { Component, OnInit,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { DialogData } from '../../components/display-component/display-component.component';
import { NoteService } from '../../service/noteservice/note.service'

@Component({
  selector: 'app-labeldialog',
  templateUrl: './labeldialog.component.html',
  styleUrls: ['./labeldialog.component.scss']
})
export class LabeldialogComponent implements OnInit {
flag=true;
flag1=true;
labelList:any;
  constructor(public dialogRef: MatDialogRef<LabeldialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public note:NoteService) { }

  ngOnInit() {
this.getLabelIdList()
  }
  
reverseFlag(){
  this.flag=!this.flag
}
getLabelIdList(){
this.note.getLabelList().subscribe(data=>{
  console.log(data['data']['details'],'label data')
  this.labelList=data['data']['details'];
}
 )
}
addLabel(label){
  var userId=localStorage.getItem('userid')
  this.note.postlabels({
    "label": label,
    "isDeleted":false,
  "userId": userId
  }).subscribe(data=>
    console.log("response",data),
    err=>{
      console.log(err)
    })
}
call(event: any,label) {
  if (event.keyCode == 13) {
  this.addLabel(label);}
  }

  reverse(){
    this.flag1=!this.flag1
  }

  deleteLabel(id){
    this.note.deleteLabel(id).subscribe(data=>
      console.log(data,'response when delete label'),
      err=>console.log(err,"err delete"))
  }

}
