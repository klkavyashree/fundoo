import { Component, OnInit,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { DialogData } from '../../components/dashboard/dashboard.component';
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
model:any;
label:string;
  constructor(public dialogRef: MatDialogRef<LabeldialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public note:NoteService) { }

  ngOnInit() {
this.getLabelIdList()
  }
  
reverseFlag(){
  this.flag=!this.flag
}

/**
 * @function:this will get all the labels 
 */
getLabelIdList(){
  try{
this.note.getLabelList().subscribe(data=>{
  console.log(data,'label data')
  this.labelList=data['data']['details'];
  this.labelList=this.labelList.reverse()
}
 )}catch(err){
   console.log("err occur")
 }
}

/**
 * @function:this wil add all label to the array of labels
 */
addLabel(label){
  try{
  var userId=localStorage.getItem('userid')
  this.note.postlabels({
    "label": label,
    "isDeleted":false,
  "userId": userId
  }).subscribe(data=>{
    console.log("response",data)
  this.labelList.splice(0,0,data)
this.label=''},
    err=>{
      console.log(err)
    })}
    catch(err){
      console.log(err)
    }
}

/**
 * @function:this will call the event of enter and call the adding function 
 */
call(event: any,label) {
  try{
  if (event.keyCode == 13) {
  this.addLabel(label);}
  }catch(err){
    console.log(err,"error occur")
  }
  }

/**
 * @function:this will reverse the flag 
 */
  reverse(){
    this.flag1=!this.flag1
  }

/**
 * @function:this will delete the label 
 */
  deleteLabel(array){
    try{
    this.note.deleteLabel(array.id).subscribe(data=>{
      console.log(data,'response when delete label')
      let ind=this.labelList.indexOf(array)
      this.labelList.splice(ind,1);
    },
      err=>console.log(err,"err delete"))
    }catch(err){
      console.log(err)
    }
  }

/**
 * @function:this will update all the labels 
 */
  updateLabel(array){
    try{
    this.model={
      "label": array.label,
      "isDeleted": false,
      "userId": array.userId
    }
    this.note.updateLabel(array.id,this.model).subscribe(data=>{
      console.log(data,'update resp'),
      this.getLabelIdList()},
      err=>{
        console.log(err)
      })
  }catch(err){
    console.log(err)
  }
  }
}
