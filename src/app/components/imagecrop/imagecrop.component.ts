import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { DialogData } from '../../components/dashboard/dashboard.component';
import { UserService } from '../../service/userService/user.service'
import { HttpserviceService } from '../../service/httpservice.service';
import { DataService } from '../../service/dataservice/data.service'

@Component({
  selector: 'app-imagecrop',
  templateUrl: './imagecrop.component.html',
  styleUrls: ['./imagecrop.component.scss']
})
export class ImagecropComponent implements OnInit {
imagecroped:any;
  constructor(public dialogRef: MatDialogRef<ImagecropComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public user:UserService, public http:HttpserviceService,
    public dataservice: DataService) {
      console.log(data,"in image crop dialog")
     }

  ngOnInit() {
   
  }
  private token=localStorage.getItem('token')
  imageCropped($event){
    this.imagecroped=$event.file;
    console.log(this.imagecroped,"img crop")
  }
  cancel(){
    this.dialogRef.close();
  }
  setprofile(){
    const uploadData=new FormData();
    uploadData.append('file',this.imagecroped);
    this.user.uploadImg(uploadData).subscribe(data=>{
      console.log(data,"resp when setting img")
      localStorage.setItem('imageurl',data['status'].imageUrl);
      this.dialogRef.close();
      this.dataservice.changeImage(true);
    },err=>{
      console.log(err,"err")
    });
    
  }
}
