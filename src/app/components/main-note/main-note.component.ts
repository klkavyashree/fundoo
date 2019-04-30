import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteservice/note.service';
import { DataService } from '../../service/dataservice/data.service';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-main-note',
  templateUrl: './main-note.component.html',
  styleUrls: ['./main-note.component.scss']
})
export class MainNoteComponent implements OnInit {
  allcards = [];
  card = [];
  addnote: any;
  unpinned = [];
  pin: 'pin';
  unpin: 'unpin';



  constructor(private note: NoteService, private dataService: DataService) { }

  ngOnInit() {
    this.getAllCards()
    console.log(localStorage.getItem('token'))
  }
  /**
    *this function will get all the cards list
   */
  getAllCards() {
    try {
      this.note.getNote().subscribe(data => {
        console.log('data typeeeee', typeof data['data']['data'])
        console.log(data, 'getall cards')
        this.card = data['data']['data'];
        this.card.reverse();
        console.log(this.card,"main note response")
        for (let index = 0; index < this.card.length; index++) {
          if (this.card[index].isDeleted == false && this.card[index].isArchived == false && this.card[index].isPined == false) {
            this.unpinned.push(this.card[index])
            console.log(this.unpinned, "unpinned")
          }
          else if (this.card[index].isDeleted == false && this.card[index].isArchived == false && this.card[index].isPined == true) {
            this.allcards.push(this.card[index])
          }
        }

      },
        err => {
          console.log("error occur while getting cards ", err)
        })
    }
    catch (err) {
      console.log(err)
    }
  }
  /**
   * 
   * @param $event will recieve event send from the user
   */
  recievemessage($event) {
    try {
      this.addnote = $event;
      console.log(this.addnote, "......addnote")
      if ($event.isPined) {
        this.allcards.splice(0, 0, this.addnote)
      }
      else {
        this.unpinned.splice(0, 0, this.addnote)
      }

    }
    catch (err) {
      console.log(err)
    }
  }
  getPinCard($event) {
    let ind = this.unpinned.indexOf($event)
    this.unpinned.splice(ind, 1);
    this.allcards.splice(0, 0, $event)
  }
  getUnpinCard($event) {
    let ind = this.allcards.indexOf($event)
    this.allcards.splice(ind, 1);
    this.unpinned.splice(0, 0, $event)
  }
  dialogResult($event) {
    if ($event.isPined) {
      let ind = this.unpinned.indexOf($event)
      this.unpinned.splice(ind, 1);
      this.allcards.splice(0, 0, $event)
    }
    else {
      let ind = this.allcards.indexOf($event)
      this.allcards.splice(ind, 1);
      this.unpinned.splice(0, 0, $event)
    }
  }
  getcards($event) {
    let ind = this.card.indexOf($event)
    if (ind != -1) {
      this.card[ind] = $event
    }
  }
  // archivecard($event) {
  //   console.log("enterrr.........")
  //   let ind = this.allcards.indexOf($event)
  //   if (ind != -1) {
  //     let ind = this.unpinned.indexOf($event)
  //     this.unpinned.splice(ind, 1)
  //   }
  //   else {
  //       this.allcards.splice(ind,1)
  //   }
  // }
}
