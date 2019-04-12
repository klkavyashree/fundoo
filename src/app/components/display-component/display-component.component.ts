import { Component, OnInit, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UpdatenoteComponent } from '../../components/updatenote/updatenote.component';
import { ColaboratorComponent } from '../../components/colaborator/colaborator.component'
import { NoteService } from '../../service/noteservice/note.service';
import { DataService } from '../../service/dataservice/data.service'
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
export interface DialogData {
  array: [];
  cardid: any;
  cond: any;
  type:string
  
}
@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.scss']
})
export class DisplayComponentComponent implements OnInit {
  model: any;
  show=true;
  message: string;
  array: [];
  bgcolor: any;
  data: any;
  cardid: any;
  allcards: any;
  flag1 = true;
  labelname: string;
  todaydate = new Date();
  tomorrow = new Date(this.todaydate.getFullYear(), this.todaydate.getMonth(), (this.todaydate.getDate() + 1))
  messages='display';
  displaymode:boolean=true
  
  

  /**
   * it will take input from the othe component
   */
  @Input() card;
  @Input() Search;
  @Input() arrayCards;
  @Input() type;
  @Input() cond;
  @Input() pin;
  @Output() emitPinnedCard = new EventEmitter();
  @Output() emitUnPinnedCard = new EventEmitter();
  @Output() dialogResult = new EventEmitter();
  @Output() emitMainNote = new EventEmitter();
  

  
  constructor(public dialog: MatDialog, private note: NoteService, private dataService: DataService, public router : Router) { }

  ngOnInit() {
  this.dataService.MessageView.subscribe(response=>{
      this.displaymode=response;
      console.log(this.displaymode,"displaymode")
  })
  }

  doPinned(card){
    this.note.doPin({
      "isPined": true,
      "noteIdList": [card.id]
    }).subscribe(data=>{
      console.log(card.isPined=true,'cardddddddddddd')
      this.emitPinnedCard.emit(card)
      console.log(data,"resp dopin")},err=>
      console.log(err)) 
  }
  doUnPinned(card){
  this.note.doPin({
    "isPined": false,
    "noteIdList": [card.id]
  }).subscribe(data=>{
    console.log(card.isPined=false,'do unpin cardddddddddddd')
    this.emitUnPinnedCard.emit(card)},err=>
    console.log(err))
   
}
  /**
   * keeps the track of the currently opened dialog
   */

  openDialog(array, cond, cardid,type) {
    try {
      var isPined=array.isPined;
      var isArchived = array.isArchived;
      var isDeleted = array.isDeleted

      const dialogRef = this.dialog.open(UpdatenoteComponent, {
        data: { array, cond, cardid,type},
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log('result when dialog close', result)
        console.log(result['array'], 'result get from dialog box');
        
       if(isArchived != result['array'].isArchived || isDeleted != result['array'].isDeleted){
         let ind = this.card.indexOf(result['array'])
         if(ind != -1){
          this.card.splice(ind,1)
         }
         
       }

        if(isPined!=result['array'].isPined){
        this.dialogResult.emit(result['array']);
        }
       
        this.model = {
          noteId: result['array'].id,
          title: result['array'].title,
          description: result['array'].description,
        }
        console.log(this.model, "modelll of update")
        this.note.updatenote(
          this.model).subscribe(message => {
            console.log(message)
          })


      });

    }
    catch (err) {
      console.log('error occurs ')
    }
  }
  delete($event) {
    try {
      let ind = this.card.indexOf($event);
      this.card.splice(ind, 1);
    } catch (err) {
      console.log(err)
    }
  }
  /**
   * 
   * @param $event will get the archived card details and splicing the card in that array
   */
  unarchive($event) {
    try {
      this.card.splice(0, 0, $event)
    } catch (err) {
      console.log(err)
    }
  }
  /**
   * 
   * @param $event contain unarchived card event 
   */
  archive($event) {
    try {
      let ind = this.card.indexOf($event)
      console.log(ind,"index......")
      this.card.splice(ind, 1);
    }
    catch (err) {
      console.log(err)
    }
  }
  /**
   * 
   * @param $event get card details from the user and adding it to the card
   */
  unarchived($event) {
    try {
      let ind = this.card.indexOf($event)
      this.card.splice(ind, 1);
    } catch (err) {
      console.log(err)
    }
  }
  /**
   * 
   * @param $event adding label to the card
   */
  addlabel($event) {
    this.labelname = $event.label
  }
  /**
   * function will restore the card and move the card from trash to note
   * @param card contain the details of the card
   */
  restore(card,cond) {
    try {
      this.note.deleteNote({
        "isDeleted": false,
        "noteIdList": [card.id]
      }).subscribe(data => {
        console.log(data, "response when delete");
        let ind = this.card.indexOf(card)
        this.card.splice(ind, 1);
      }, err => console.log(err))
    } catch (err) {
      console.log(err)
    }
  }
  /**
   * this function will remove the card permanently
   * @param array array contains the card details
   */
  deleteForever(array) {
    this.note.deleteForever({
      "isDeleted": false,
      "noteIdList": [array.id]
    }).subscribe(data => {
      console.log(data, "response when delete");
      let ind = this.card.indexOf(array)
      this.card.splice(ind, 1);
      // this.cardRestore(card)
    }, err => console.log(err))
  }
  /**
   * 
   * @param array it contain the details of the card
   * @param label label contains the details of the label
   */
  removeLabel(array, label) {
    try {
      this.note.removeLabel(array.id, label.id).subscribe(data => {
        console.log(data)
        let ind = array.noteLabels.indexOf(label)
        array.noteLabels.splice(ind, 1);
      }), err => {
        console.log(err, "err")
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  /**
   * 
   * @param array array contains the details of the card
   * @param rem 
   */
  removeReminder(array, rem) {
    try {
      this.note.removeRemainder({ "noteIdList": [array.id] }).subscribe(data => {
        console.log(data)
        array.reminder.splice(0, 1)
      })
    } catch (err) {
      console.log(err)
    }
  }
  showTickBox($event) {
    this.show = $event
  }

  addCheckList(list){
    try{
      var model={
        "isDeleted": false,
        "itemName": list.itemName,
        "status":"open"
      }
    this.note.updateCheckList(list.notesId,list.id,model).subscribe(data=>{
   console.log(data)
    })
  }catch(err){
        console.log(err,"error occur while adding checklist")
  }
  }

  /**
   * @param itemname will get itm name to remove that item from checklist
  //  */
  removeCheckList(list){
    try{
      var model={
        "isDeleted": false,
        "itemName": list.itemName,
        "status":"close"
      }
    this.note.updateCheckList(list.notesId,list.id,model).subscribe(data=>{console.log(data)
      console.log(data)
    })
  }
  catch(err){
    console.log(err)
  }
  }
  cardCollaborator($event){
    console.log($event,'eventtttt')
    let ind=this.card.indexOf($event)
    if (ind !== -1){
      this.card[ind]=$event
    }
  }
  getReminder($event){
    let ind=this.card.indexOf($event)
    if(ind != -1){
      this.card[ind]=$event
    }
  }

navigate(card){
localStorage.setItem('noteId',card.id)
this.router.navigate(['dashboard/askquestion'])
}




  // opendialog(array){
  //   const dialogRef = this.dialog.open(ColaboratorComponent, {
  //     data: {array},
  //     width: '600px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log('result when dialog close', result)
  //   });
  // }
}
