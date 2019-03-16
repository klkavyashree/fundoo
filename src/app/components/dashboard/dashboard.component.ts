import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../../service/dataservice/data.service'
import { NoteService } from '../../service/noteservice/note.service'
import { MatSnackBar } from '@angular/material'
import { LabeldialogComponent } from '../labeldialog/labeldialog.component'
export interface DialogData {
  data: "kavyashree"
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  message: any;
  content: any;
  Search:string;
  label:any;
  model:any;
  private _mobileQueryListener: () => void;

  constructor(private data: DataService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router,
    public dialog: MatDialog, private snackBar: MatSnackBar, private notes:NoteService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  recieveMessage($event) {
    this.message = $event;
    console.log("event data..", this.message);
  }
  isclick() {
    return false;
  }
  signout() {
    this.router.navigate(['login']);
  }
 note(){
   this.router.navigate(['dashboard/note']);
 }
 openTrash(){
   this.router.navigate(['dashboard/trash'])
 }
 goSearch() {
  this.router.navigate(['dashboard/search']);
}

lookfor() {
  this.data.changeMessage(this.Search)
}

archieve(){
  this.router.navigate(['dashboard/archive'])
 }
 openLabel(){
   {
    try {
      const dialogRef = this.dialog.open(LabeldialogComponent, {
        data: {  },
        width:'auto'
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
        this.notes.postlabels (
          this.model).subscribe(message => {
          console.log(message)
        })


      });

    }
    catch (err) {
      console.log('error occurs ')
    }
  }
 }
}