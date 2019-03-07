import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UpdatenoteComponent } from '../../components/updatenote/updatenote.component'


@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.scss']
})
export class DisplayComponentComponent implements OnInit {
  model:any;
  title:'string';
  description:'string';


/**
 * it will take input from the othe component
 */
@Input() card=[];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  /**
   * keeps the track of the currently opened dialog
   */
  openDialog(): void{
    const dialogRef = this.dialog.open(UpdatenoteComponent,{
      data: {name: this.title, animal: this.description}
    })
    
  }
 
 

}
