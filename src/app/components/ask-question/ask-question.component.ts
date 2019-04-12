import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../service/questionservice/question.service'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'
@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {

  constructor(public question: QuestionService, public router: Router) { }
  title: '';
  description: '';
  questions = ''
  note: any
  flag = true;
  flag1 = true;
  name = ''
  questionn = ''
  date: Date
  parentid: any
  questionArray: any
  combineArray: any;
  index: any;
  reply: any
  hide = false;
  flag3 = false;
  childindex: any
  likes: Number;
  rate: Number;



  ngOnInit() {
    var noteid = localStorage.getItem('noteId')

    this.getDetails(noteid)
  }
  public imageNew = localStorage.getItem('imageurl')
  img = environment.profileUrl + this.imageNew;

  getDetails(noteid) {
    this.question.getnoteDetails(noteid).subscribe(data => {

      this.note = data['data']['data'][0];
      console.log(this.note, 'note det');
      if (this.note.questionAndAnswerNotes.length > 0) {
        this.questionn = this.note.questionAndAnswerNotes[0].message
        this.date = this.note.questionAndAnswerNotes[0].createdDate
        this.questionArray = this.note.questionAndAnswerNotes[0]

        if(this.note.questionAndAnswerNotes[0].rate.length>0 ){

        this.rate = this.note.questionAndAnswerNotes[0].rate[0].rate
      }
        this.combineArray = this.note.questionAndAnswerNotes
        console.log(this.combineArray)
        this.combineArray.splice(0, 1)
        console.log(this.combineArray, "combinearray")
        console.log(this.questionArray, "question array")

      }

      this.title = data['data']['data'][0].title
      this.description = data['data']['data'][0].description
      this.name = this.note.user.firstName + " " + this.note.user.lastName + ""


    })
  }
  navigate() {
    this.router.navigate(['dashboard/note'])
  }
  ask() {
    this.question.askQuestion({
      "message": this.questions,
      "notesId": localStorage.getItem('noteId')
    }).subscribe(data => {
      this.questionn = this.questions
      this.date = new Date
      this.flag = false;
      console.log(data)
    })
  }
  sendAns(id) {
    this.question.reply(id, { "message": this.questions }).subscribe(data => {
      console.log(data, "ans send resp")
    })
  }
  showHideReply() {
    this.hide = !this.hide
  }
  showAnsHide() {
    this.flag = !this.flag;
  }
  like(id) {
    this.question.like({ "like": true }, id).subscribe(data => {

      console.log(data)
      this.questionArray.like.length = data['data']['details'].count
      console.log(this.questionArray.like.length, "likes")
    })
  }

 


}
