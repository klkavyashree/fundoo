import { Component, OnInit, Output, Input, OnDestroy } from '@angular/core';
import { DataService } from '../../service/dataservice/data.service'
import { NoteService } from '../../service/noteservice/note.service'
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ColaboratorComponent } from '../../components/colaborator/colaborator.component'
import { Router } from '@angular/router';




export interface DialogData {
  card: any;
  msg: string;
}
@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})

export class IconListComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  @Output() messageEvent = new EventEmitter();
  @Input() update;
  @Input() card: any;
  @Input() more;
  @Input() doarchive: boolean;
  @Output() deletecard = new EventEmitter();
  @Output() archivedCard = new EventEmitter();
  @Output() unarchiveCard = new EventEmitter();
  @Output() showtickUpdate = new EventEmitter();
  @Output() showtickDisplay = new EventEmitter();
  @Output() emitLabelToNote = new EventEmitter();
  @Output() emitCardCollaborator = new EventEmitter();
  @Output() emitColabToNote = new EventEmitter();
  @Output() emitArchiveEvent = new EventEmitter();
  @Output() emitReminder = new EventEmitter();
  @Output() emitReminderNote = new EventEmitter();
  @Input() type;
  @Input() dialogs: string;
  @Input() message;


  model: any;
  flag = false;
  display = false;
  allcards: any;
  flag2 = true;
  flag3 = true;
  labelList: any;
  label: string;
  currentDate = new Date();
  data: any;
  flag4 = false;
  date: Date
  setTime: number=null;
  picker: any;
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
  constructor(private dataService: DataService, private note: NoteService, public dialog: MatDialog, private router:Router ) { }
  ngOnInit() {
    this.getLabels()
  }
  /**
   * 
   * @param color will take input from the template to emit the event
   */

  colorsEdit(color, card) {
    try {
      if (card == undefined) {
        console.log('in undefined')
        console.log(color)
        this.messageEvent.emit(color);
      }
      else {
        console.log('in defined card')
        this.updateColor(color, card)
      }
    } catch (err) {
      console.log(err)
    }
  }

  /**
   * 
   * @param color will get the color of the card 
   * @param card will get the details of the card
   */
  updateColor(color, card) {
    try {
      console.log(card, "card..")
      console.log(card.color = color, 'color..')
      this.note.updateColor({
        "color": color,
        'noteIdList': [card.id]
      }).subscribe(data => {
        console.log(data, "data from update color")
      },
        err => {
          console.log(err, "err")

        })
    } catch (err) {
      console.log(err)
    }
  }
  /**
   * this function will delete the card from the array of cards
   * @param card will get all the details of the card
   */
  deleteNote(card) {
    try {
      this.note.deleteNote({
        "isDeleted": true,
        "noteIdList": [card.id]
      }).subscribe(data => {
        console.log(data, "response when delete");
        this.cardDelete(card)
      }, err => console.log(err))
    }
    catch (err) {
      console.log(err)
    }
  }
  /**
   * 
   * @param card contains all the details of the card
   */
  cardDelete(card) {
    try {
      console.log(card.isDeleted=true)
      this.deletecard.emit(card)
    }
    catch (err) {
      console.log(err)
    }
  }
  // doArchive(card){
  //   this.doarchive=!this.doarchive
  //   this.archive(card)
  // }
  doArchive(card) {
    if (card != undefined) {
      this.note.archiveNote({
        "isArchived": true,
        "noteIdList": [card.id]
      }).subscribe(data => {
        this.cardArchive(card)
      }), err => console.log(err)
    }
    else {
      this.emitArchiveEvent.emit(true)
    }
  }
  doUnArchive(card) {
    this.note.archiveNote({
      "isArchived": false,
      "noteIdList": [card.id]
    }).subscribe(data => {
      this.notArchive(card)
    }), err => console.log(err)


  }
  cardArchive(card) {
    console.log(card.isArchived=true,"in archive icon")
    this.archivedCard.emit(card)
  }
  notArchive(card) {
   card.isArchived=false; 
    this.unarchiveCard.emit(card)
  }

  reverseFlag() {
    this.flag2 = !this.flag2
  }
  getLabels() {
    this.note.getLabelList().subscribe(data => {
      this.labelList = data['data']['details'];
    }), err => {
      console.log(err, "in getlabel")
    }
  }
  doSomething($event: any) {
    this.flag3 = !this.flag3
    $event.stopPropagation();
    //Another instructions
  }
  addLabeltocard(card, label) {
    if (card != undefined) {
      console.log("enter....")
      console.log(card)
      console.log(label)
      this.note.addLabeltoNote(card.id, label.id).subscribe(data => {
        console.log(card, "card")
        card = card['noteLabels'].push(label)
        console.log(card, "card in addlabeltocard")
      }), err => {
        console.log(err)
      }
    }
    else {
      this.emitLabelToNote.emit(label)
    }
  }
  /**
   * 
   * @param label will get the name of the label and add the label to labelist
   */
  addLabel(label) {
    try {
      var userId = localStorage.getItem('userid')
      this.note.postlabels({
        "label": label,
        "isDeleted": false,
        "userId": userId
      }).subscribe(data => {
        console.log("response", data)
        this.labelList.splice(0, 0, data)
        this.label = ''
      },
        err => {
          console.log(err)
        })
    }
    catch (err) {
      console.log(err)
    }
  }
  checked() {
    if (localStorage.getItem('checked') == null || "false") {
      localStorage.setItem("checked", "true")
    }
    else {
      localStorage.setItem('checked', "false")
    }
  }

  remainderToday(card) {
    try {
      if (card == undefined) {
        var reminder=new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate(), 20, 0, 0, 0)
        this.emitReminderNote.emit(reminder)
      }
      else {
      this.data = {
        "noteIdList": [card.id],
        "reminder": new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate(), 20, 0, 0, 0)
      }
        if (card.reminder != undefined) {
          card.reminder = [];
          card.reminder.push(this.data.reminder)
        }

        this.note.addRemainder(this.data).subscribe(data => {
          console.log(data, "data")
          this.emitReminder.emit(card)
        }), err => console.log(err)
      }
    } catch (err) {
      console.log(err)
    }
  }
  /**
   * 
   * @param card it contains the card details
   */
  remainderTom(card) {
    try {
      if(card==undefined){
        var reminder=new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), (this.currentDate.getDate() + 1), 8, 0, 0, 0)
        this.emitReminderNote.emit(reminder)
      }
      else{
      this.data = {
        "noteIdList": [card.id],
        "reminder": new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), (this.currentDate.getDate() + 1), 8, 0, 0, 0)
      }
      if (card.reminder != undefined) {
        card.reminder = [];
        card.reminder.push(this.data.reminder)
      }
      this.note.addRemainder(this.data).subscribe(data => {
        console.log(data)
        this.emitReminder.emit(card)
      }), err => console.log(err)
    } }catch (err) {
      console.log(err)
    }
  }
  /**
   * 
   * @param card will get the card and add the remainder to that card
   */
  remaindWeek(card) {
    try {
      if(card==undefined){
        var reminder=new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), (this.currentDate.getDate() + 7), 8, 0, 0, 0)
        this.emitReminderNote.emit(reminder)
      }
      else{
      this.data = {
        "noteIdList": [card.id],
        "reminder": new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), (this.currentDate.getDate() + 7), 8, 0, 0, 0)
      }
      
      if (card.reminder != undefined) {
        card.reminder = [];
        card.reminder.push(this.data.reminder)
      }
      this.note.addRemainder(this.data).subscribe(data => {
        console.log(data)
        this.emitReminder.emit(card)
      }), err => console.log(err)
    } }catch (err) {
      console.log(err)
    }
  }


  time(time) {
    this.setTime = time;
    console.log(this.setTime, "time")
  }
  Reminder(card) {
    this.date.setHours(this.setTime)
    if(card==undefined){
      var reminder = this.date
      this.emitReminderNote.emit(reminder)
    }
    else{
    var model = {
      "noteIdList": [card.id],
      "reminder": this.date
    }
    
    if (card.reminder != undefined) {
      card.reminder = [];
      card.reminder.push(model.reminder)
    }
    console.log(model)
    this.note.addRemainder(model).subscribe(data => {
      this.setTime = null
      console.log(data)
      this.emitReminder.emit(card)
    }, err => {
      console.log(err)
    })
  }
  }
  /**
   * function will hide4 the checkboxes in the checklist
   */
  HideTick() {
    try {
      this.showtickUpdate.emit(this.flag4)
      console.log(this.flag4, "flag4")
      this.flag4 = !this.flag4
    } catch (err) {
      console.log(err)
    }

  }

  colaborator(card, msg) {
    try {
      const dialogRef = this.dialog.open(ColaboratorComponent, {
        data: { card, msg },
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log('result when dialog close', result)
        if (msg == "display") {
          this.emitCardCollaborator.emit(result['card'])
        }
        else {
          console.log(result, "colab arayyyyy")
          this.emitColabToNote.emit(result)
        }
      });

    }
    catch (err) {
      console.log('error occurs ')
    }
  }
  question(note){
    localStorage.setItem('noteId',note.id)
      this.router.navigate(['dashboard/askquestion'])
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }
}
