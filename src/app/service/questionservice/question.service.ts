import { Injectable } from '@angular/core';
import { HttpserviceService } from '../../service/httpservice.service'
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(public http:HttpserviceService) { }


  getnoteDetails(noteid){
    return this.http.getHttp('notes/getNotesDetail/'+noteid)
  }

  askQuestion(data){
    return this.http.postJSON('questionAndAnswerNotes/addQuestionAndAnswer',data)
  }
  reply(id,data){
    return this.http.postJSON('questionAndAnswerNotes/reply/'+id,data)
  }
  like(data,id){
    return this.http.postJSON('questionAndAnswerNotes/like/'+id,data)
  }
  rate(id, data){
    return this.http.postJSON('questionAndAnswerNotes/rate/'+id,data)
  }
}
