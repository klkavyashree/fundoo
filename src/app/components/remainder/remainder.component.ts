import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../service/noteservice/note.service'

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {
  allcards: any
  card:any
  constructor(public note: NoteService) { }
 
  ngOnInit() {
    this.getReminder()
  }

  getReminder() {
    this.note.getRemainderList().subscribe(data => {
      this.card = data['data']['data']
    })
  }
}
