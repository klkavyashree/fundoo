import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UpdatenoteComponent } from '../../components/updatenote/updatenote.component';
import { NoteService } from '../../service/noteservice/note.service';

export interface DialogData {
  array: [];
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
  cardid:any;
  /**
   * it will take input from the othe component
   */
  @Input() card = [];
  constructor(public dialog: MatDialog, private note: NoteService) { }

  ngOnInit() {
  }
  /**
   * keeps the track of the currently opened dialog
   */

  openDialog(array) {
    try {
      const dialogRef = this.dialog.open(UpdatenoteComponent, {
        data: { array },
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result['array'].id);

        this.model = {
          noteId: result['array'].id,
          title: result['array'].title,
          description: result['array'].description,
        }
        console.log(this.model, "modelll of update")
        this.note.updatenote(this.model).subscribe(message => {
          console.log(message)
        })


      });

    }
    catch (err) {
      console.log('error occurs ')
    }
  }

}
