import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UpdatenoteComponent } from '../../components/updatenote/updatenote.component';
import { NoteService } from '../../service/noteservice/note.service';
import { DataService } from '../../service/dataservice/data.service'

export interface DialogData {
  array: [];
  cond:any;
}
@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.scss']
})
export class DisplayComponentComponent implements OnInit {
  model: any;
  message: string;
  array: [];
  bgcolor: any;
  data: any;
  cardid: any;
  allcards: any;
  flag1=true;

  /**
   * it will take input from the othe component
   */
  @Input() card;
  @Input() Search;
  @Input() arrayCards;
  @Input() type;
  @Input() cond;
  constructor(public dialog: MatDialog, private note: NoteService, private dataService: DataService) { }

  ngOnInit() {
  }
  /**
   * keeps the track of the currently opened dialog
   */

  openDialog(array,cond) {
    try {
      const dialogRef = this.dialog.open(UpdatenoteComponent, {
        data: { array,cond },
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log('result when dialog close',result)
        console.log(result['array'].id,'result get from dialog box');

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
    try{
    let ind = this.card.indexOf($event);
    this.card.splice(ind, 1);
    }catch(err){
      console.log(err)
    }
  }
  
  unarchive($event){
    try{
    this.card.splice(0,0,$event)
    }catch(err){
      console.log(err)
    }
  }
  archive($event){
    try{
    let ind=this.card.indexOf($event)
    this.card.splice(ind,1);}
    catch(err){
      console.log(err)}
  }

  unarchived($event){
    try{
    let ind=this.card.indexOf($event)
    this.card.splice(ind,1);
    }catch(err){
      console.log(err)
    }
  }
  restore(card){
    try{
    this.note.deleteNote({
      "isDeleted":false,
      "noteIdList":[card.id]
  }).subscribe(data=>{
    console.log(data,"response when delete");
    let ind=this.card.indexOf(card)
    this.card.splice(ind,1);
    // this.cardRestore(card)
  },err=>console.log(err))
}catch(err){
  console.log(err)
}
  }
  deleteForever(array){
    this.note.deleteForever({
      "isDeleted":false,
      "noteIdList":[array.id]
    }).subscribe(data=>{
      console.log(data,"response when delete");
      let ind=this.card.indexOf(array)
      this.card.splice(ind,1);
      // this.cardRestore(card)
    },err=>console.log(err))
  }
  
}
