import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoteService } from '../../service/noteservice/note.service'
import { DialogData } from '../../components/icon-list/icon-list.component';
import { UserService } from '../../service/userService/user.service';
import { MatSnackBar } from '@angular/material'


@Component({
  selector: 'app-colaborator',
  templateUrl: './colaborator.component.html',
  styleUrls: ['./colaborator.component.scss']
})
export class ColaboratorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ColaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public note: NoteService, public user: UserService, public snackbar: MatSnackBar) {
    console.log(this.cardDetails = data['card'], "data of card")
    console.log(data.msg,"msg.............")
  }
  name: string;
  email: string;
  colaborator: string;
  userList: any
  rcvrMail: '';
  rcvrFname: ''
  rcvrLname: '';
  rcvrId: ''
  cardDetails: any;
  flag = true;
  colaborators=[];

  ngOnInit() {
    this.name = (localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname'))
    this.email = localStorage.getItem('email')
  }

  revFlag() {
    this.flag = !this.flag
  }
  addColaborator(noteid) {
    if (this.colaborator) {
      var body = {
        'firstName': this.rcvrFname,
        'lastName': this.rcvrLname,
        'userId': this.rcvrId,
        'email': this.rcvrMail
      }
      console.log(noteid, "body....")
      this.note.addcollaborator(body, noteid).subscribe(data => {
        console.log(data)
        this.cardDetails.collaborators.push(body)
        this.colaborator = '';
      },
        err => {
          console.log(err)
        })
    }
  }
  details(array) {
    this.rcvrFname = array.firstName;
    this.rcvrLname = array.lastName;
    this.rcvrMail = array.email;
    this.rcvrId = array.userId;
    this.colaborator = this.rcvrMail;
    console.log(array, "array")
    for (let index = 0; index < this.cardDetails.collaborators.length; index++) {
      if (this.cardDetails.collaborators[index].email == array.email) {
        this.snackbar.open('email already exist', 'close', {
          duration: 1500,
        })
        this.colaborator = '';
      }

    }

  }
  searchForList(data) {
    this.user.searchUserList(
      { "searchWord": data }).subscribe(data => {
        this.userList = data['data']['details'];
      })
  }

  removeColaborator(cardid, user) {
    console.log(user, 'user')
    this.note.removeColaborator(cardid, user.userId).subscribe(data => {
      console.log(data, "del")
      let ind = this.cardDetails.collaborators.indexOf(user);
      this.cardDetails.collaborators.splice(ind, 1);

    })
  }

  saveDetailstoNote(array) {
    console.log('saving...',array)
    this.rcvrFname = array.firstName;
    this.rcvrLname = array.lastName;
    this.rcvrMail = array.email;
    this.rcvrId = array.userId;
    this.colaborator = this.rcvrMail;
    console.log(array, "array")
    for (let index = 0; index < this. colaborators.length; index++) {
      if (this.colaborators[index].email == array.email) {
        this.snackbar.open('email already exist', 'close', {
          duration: 1500,
        })
        this.colaborator = '';
      }

    }

  }

addColaboratortoNote(){
  if (this.colaborator) {
    var body = {
      'firstName': this.rcvrFname,
      'lastName': this.rcvrLname,
      'userId': this.rcvrId,
      'email': this.rcvrMail
    }
      this.colaborators.push(body)
      this.colaborator = '';
    }
}
remove(user){
  let ind = this.colaborators.indexOf(user);
  this.colaborators.splice(ind, 1);
}

enter(event: any,cardid){
if(event.keyCode == 13){
  this.addColaborator(cardid)
}
}

enterfunc(event: any) {
  try{
  if (event.keyCode == 13) {
  this.addColaboratortoNote()}
  }catch(err){
    console.log(err,"error occur")
  }
  }
}
