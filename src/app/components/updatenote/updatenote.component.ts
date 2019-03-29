import { Component, OnInit,Inject,EventEmitter } from '@angular/core';
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
show=true;
checkLists =[];
cardid:string;
list:string;
deletedLists=[];
unDeletedList=[]

  constructor(public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private snackBar: MatSnackBar, public noteService:NoteService )
     {console.log(this.cardid=data['cardid'],"in dialog") }
  ngOnInit() {
    this.getCheckList(this.cardid)
  }

  /**
   * this function will add the list to the checklist
   * @param event it will check the event occured
   * @param name will get the name of the list
   */
  enter(event,name){
    try{
    if (event.keyCode == 13){
      this.addCheckList(name)
    }
  }catch(err){
        console.log(err)
  }
  }
  /**
   * 
   * @param name will get the name of the list and function will add the list to the checklist of that array
   */
  addCheckList(name){
    try{
    var model={
      "itemName":name,
      "status":"open"
    }
    this.noteService.addCheckList(model,this.cardid).subscribe(data=>{
    this.unDeletedList.splice(this.unDeletedList.length,0,data['data']['details'])
      this.list=''
    })
  }catch(err){
        console.log(err,"error occur while adding checklist")
  }
  }
  getCheckList(noteid){
    this.noteService.getCheckList(noteid).subscribe((data: any) => {
      this.checkLists=data;
      console.log(this.checkLists,"checklists getttttttttttttttttttt")
      for(let i=0;i<this.checkLists.length;i++){
        if(this.checkLists[i].status=="open" && !this.checkLists[i].isDeleted){
              this.unDeletedList.push(this.checkLists[i])
        }
        else if(this.checkLists[i].status=="close" && !this.checkLists[i].isDeleted){
                this.deletedLists.push(this.checkLists[i])
        }
      }
    }),err=>{
      console.log(err)
    }
  }
  
 /**
  * snack bar will appear when user try to edit from trash
  */
  openSnackBar(){
    try{
    this.snackBar.open(' In trash u cannot edit',"restore", {
      duration: 3000
    });
  }catch(err){
    console.log(err)
  }
  }
  showCheckBox(event){
    this.show=event
  }
  /**
   * @param itemname will get itm name to remove that item from checklist
   */
  update(checklist,status){
    try{
    var model={
      "isDeleted": false,
      "itemName": checklist.itemName,
      "status":status
    }
    this.noteService.updateCheckList(checklist.notesId,checklist.id,model).subscribe(data=>{console.log(data,"checklist update resp data")
    if(status=='close'){
    let ind = this.unDeletedList.indexOf(checklist)
    this.unDeletedList.splice(ind,1)
    this.deletedLists.splice(0,0,checklist)}
    else{
      let ind = this.deletedLists.indexOf(checklist)
    this.deletedLists.splice(ind,1)
    this.unDeletedList.splice(0,0,checklist)
    }
      
    })
  }
  catch(err){
    console.log(err)
  }
  }
  /**
   * 
   * @param list will get all the details of the checklits
   */
delete(list,status){
  try{
this.noteService.removeChecklist(this.cardid,list.id).subscribe(data=>{console.log(data,"del checklist resp")})
if(status=="open"){
  let ind = this.unDeletedList.indexOf(list)
  this.unDeletedList.splice(ind,1)}
  else{
    let ind = this.deletedLists.indexOf(list)
  this.deletedLists.splice(ind,1)
  }
}
catch(err){
  console.log(err)
}
}
doPin(card){
  this.noteService.doPin({
    "isPined": true,
    "noteIdList": [card.id]
  }).subscribe(data=>{
    console.log(card.isPined=true,'cardddddddddddd')
    console.log(data,"resp dopin")},err=>
    console.log(err)) 

}
doUnPin(card){
    this.noteService.doPin({
      "isPined": false,
      "noteIdList": [card.id]
    }).subscribe(data=>{
      console.log(card.isPined=false,'do unpin cardddddddddddd')},err=>
      console.log(err))
     
}
}
