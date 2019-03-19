import { Component, OnInit, Output, Input, OnDestroy } from '@angular/core';
import { DataService } from '../../service/dataservice/data.service'
import { NoteService } from '../../service/noteservice/note.service'
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  @Output() messageEvent = new EventEmitter();
  @Input() card: any;
  @Input() more;
  @Input() doarchive:boolean;
  @Output() deletecard = new EventEmitter();
  @Output() archivedCard = new EventEmitter();
  @Output() unarchiveCard = new EventEmitter();
  @Output() showtick = new EventEmitter();
  
  @Input() type;
  model: any;
  flag = false;
  display=false;
  allcards:any;
  flag2=true;
  flag3=true;
  labelList:any;
  label:string;
  currentDate=new Date();
  data:any;
  flag4=true;
  show=true;
  /**
   * taking the colors as two dimensional array
   */
  colorArray = [[{ 'color': '#FFFFFF', 'name': 'White' },
  { 'color': '#E53935', 'name': 'Red' },
  { 'color': '#EF6C00', 'name': 'Orange' },
  { 'color': '#FFEB3B', 'name': 'Yellow' }],

  [{ 'color': '#B2FF59', 'name': 'green' },
  { 'color': '#69F0AE', 'name': 'teal' },
  { 'color': '#81D4FA', 'name': 'blue' },
  { 'color': '#0288D1', 'name': 'darkblue' }],

  [{ 'color': '#B39DDB', 'name': 'purple' },
  { 'color': '#F48FB1', 'name': 'pink' },
  { 'color': '#FFAB40', 'name': 'brown' },
  { 'color': '#E0E0E0', 'name': 'gray' }

  ]]
  constructor(private dataService: DataService, private note: NoteService) { }
  ngOnInit() {
    this.getLabels()
  }
  /**
   * 
   * @param color will take input from the template to emit the event
   */

  colorsEdit(color, card) {
    if (card == undefined) {
      console.log('in undefined')
      console.log(color)
      this.messageEvent.emit(color);
    }
    else {
      console.log('in defined card')
      this.updateColor(color,card)
    }

  }
  updateColor(color,card) {
    console.log(card,"card..")
    console.log(card.color=color,'color..')
    this.note.updateColor({
      "color": color,
      'noteIdList': [card.id]
    }).subscribe(data =>{
      console.log(data, "data from update color")},
      err=>{
        console.log(err,"err")

      })
  }
  deleteNote(card){
    this.note.deleteNote({
        "isDeleted":true,
        "noteIdList":[card.id]
    }).subscribe(data=>{
      console.log(data,"response when delete");
      this.cardDelete(card)
    },err=>console.log(err))
    
  }
  cardDelete(card){
    this.deletecard.emit(card)
  }
  // doArchive(card){
  //   this.doarchive=!this.doarchive
  //   this.archive(card)
  // }
  doArchive(card){
      this.note.archiveNote({
        "isArchived":true,
        "noteIdList":[card.id]
      }).subscribe(data=>{
        this.cardArchive(card)
      }),err=>console.log(err)
  }
  doUnArchive(card){
      this.note.archiveNote({
        "isArchived":false,
        "noteIdList":[card.id]
      }).subscribe(data=>{
        this.notArchive(card)
      }),err=>console.log(err)
  
   
    }
    cardArchive(card){
      this.archivedCard.emit(card)
    }
    notArchive(card){
      this.unarchiveCard.emit(card)
    }

reverseFlag(){
  this.flag2=!this.flag2
}
 getLabels(){
   this.note.getLabelList().subscribe(data=>{
     this.labelList=data['data']['details'];
     console.log(this.labelList,'label list')
   }),err=>{
     console.log(err,"in getlabel")
   }
 }
 doSomething($event:any){
   this.flag3=!this.flag3
  $event.stopPropagation();
  //Another instructions
}
addLabeltocard(card,label){
  console.log(card,label)
  this.note.addLabeltoNote(card.id,label.id).subscribe(data=>{
    console.log(card,"card")
    card=card['noteLabels'].push(label)
    console.log(card,"card in addlabeltocard")
   
  }),err=>{
    console.log(err)
  }
}

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
checked(){
  if(localStorage.getItem('checked')==null||"false"){
    localStorage.setItem("checked","true")
  }
  else{
    localStorage.setItem('checked',"false")
  }
}

remainderToday(card){
  this.data={
    "noteIdList":[card.id],
    "reminder":new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(), this.currentDate.getDate(),20,0,0,0)
  }
  this.note.addRemainder(this.data).subscribe(data=>{
    console.log(this.data,"data")
 
  }),err=>console.log(err)
}
remainderTom(card){
  this.data={
    "noteIdList":[card.id],
    "reminder":new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(), (this.currentDate.getDate()+1),8,0,0,0)
  }
  this.note.addRemainder(this.data).subscribe(data=>{
    console.log(this.data)
  }),err=>console.log(err)
}
remaindWeek(card){
  this.data={
    "noteIdList":[card.id],
    "reminder":new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(), (this.currentDate.getDate()+7),8,0,0,0)
  }
  this.note.addRemainder(this.data).subscribe(data=>{
    console.log(this.data)
  }),err=>console.log(err)
}
remindDate(card,picker){
  console.log(picker)

}


ngOnDestroy() { 
  this.destroy$.next(true);
  // Now let's also unsubscribe from the subject itself:
  this.destroy$.unsubscribe();
}
checklist(card){
  this.showtick.emit(this.show)
  
}
HideTick(){
  this.flag4=!this.flag4
}

}

