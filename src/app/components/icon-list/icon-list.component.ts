import { Component, OnInit, Output, Input } from '@angular/core';
import { DataService } from '../../service/dataservice/data.service'
import { NoteService } from '../../service/noteservice/note.service'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {
  @Output() messageEvent = new EventEmitter();
  @Input() card: any;
  @Input() more;
  @Input() doarchive:boolean;
  @Output() deletecard = new EventEmitter();
  @Output() archivedCard = new EventEmitter();
  @Output() unarchiveCard = new EventEmitter();
  @Input() type;
  model: any;
  flag = false;
  display=false;
  allcards:any;
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


 

}

