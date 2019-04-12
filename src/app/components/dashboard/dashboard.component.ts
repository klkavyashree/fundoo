import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../../service/dataservice/data.service'
import { NoteService } from '../../service/noteservice/note.service'
import { MatSnackBar } from '@angular/material'
import { LabeldialogComponent } from '../labeldialog/labeldialog.component'
import { ImagecropComponent } from '../../components/imagecrop/imagecrop.component'
import { environment } from '../../../environments/environment'
export interface DialogData {
  data:any
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  message: any;
  Search: string;
  labelList: any;
  flag=true
  name=''
  email=''
  flag2=false;
  flag3=true;
  profilePic:boolean;
  imageprofile:string;
  private _mobileQueryListener: () => void;

  constructor(private data: DataService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router,
    public dialog: MatDialog, private snackBar: MatSnackBar, private notes: NoteService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.getLabels()
    this.name=localStorage.getItem('firstname')+" "+localStorage.getItem('lastname')
    this.email=localStorage.getItem('email')
  }
 
  recieveMessage($event) {
    this.message = $event;
    console.log("event data..", this.message);
  }
  isclick() {
    return false;
  }
refresh(){
  location.reload();
}
grid_list(){
  this.flag3 = !this.flag3;
  this.data.changeView(this.flag3)
}

  imageFile=null;
  public imageNew =localStorage.getItem('imageurl')
  img = environment.profileUrl+this.imageNew;

  
  fileUpload($event){
    console.log($event,"......")
    console.log($event.path[0].files[0],"upload file ")
      this.imageFile=$event.path[0].files[0]
      const uploadImage=new FormData();
      uploadImage.append('file',this.imageFile,this.imageFile.name);
      this.ChangePic($event)
  }

  ChangePic(data){
    {
      try {
        const dialogRef = this.dialog.open(ImagecropComponent, {
          data: data,
          width: '600px'
        });
        dialogRef.afterClosed().subscribe(result => {
          this.data.currentImage.subscribe(response=>{
            
          }
          )
        
          
          // if(this.profilePic==true){
            this.imageprofile=localStorage.getItem('imageurl')
            this.img=environment.profileUrl+this.imageprofile;
            
          // }

        })
      } catch (err) {
        console.log('error occurs ',err)
      }
    }
  }
  signout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  note() {
    this.router.navigate(['dashboard/note']);
  }
  openTrash() {
    this.router.navigate(['dashboard/trash'])
  }
  goSearch() {
    this.router.navigate(['dashboard/search']);
  }

  lookfor() {
    this.data.changeMessage(this.Search)
  }

  archieve() {
    this.router.navigate(['dashboard/archive'])
  }
  editlabel(){
    this.router.navigate(['dashboard/labels'])
  }
  reminder(){
    this.router.navigate(['dashboard/reminders'])
  }
  SearchBar(){
    this.flag2= !this.flag2;
  }
  openLabel() {
    {
      try {
        const dialogRef = this.dialog.open(LabeldialogComponent, {
          data: {},
          width: 'auto'
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log('result when dialog close', result);
          var userId=localStorage.getItem('userid')
          this.notes.postlabels(
            {
              "label": result,
              "isDeleted": false,
              "userId": userId
            }).subscribe(data =>
              this.labelList.splice(0, 0, data)
            ), err => {
              console.log(err)
            }
        })
      } catch (err) {
        console.log('error occurs ')
      }
    }
  }

  getLabels() {
    this.notes.getLabelList().subscribe(data => {
      this.labelList = data['data']['details'];
      this.labelList = this.labelList.reverse();
      console.log(data, 'resp getlabel')
    })
  }
  sendLabel(label){
      this.data.sendLabel(label);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openCart(){
    this.router.navigate(['dashboard/cart'])
  }
  
}