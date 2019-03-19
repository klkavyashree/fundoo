import { Injectable } from '@angular/core';
import { HttpserviceService } from '../../service/httpservice.service'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpserviceService) { }
  addNote(data){
    return this.http.encodedPostForm('notes/addNotes',data)
  }
  getNote(){
   return  this.http.getHttp('notes/getNotesList')
  }
 updatenote(data){
   return this.http.encodedPostForm('notes/updateNotes',data)
 }
 updateColor(data){
   return this.http.postJSON('notes/changesColorNotes',data)
 }
 deleteNote(data){
   return this.http.postJSON('notes/trashNotes',data)
 }
 deleteForever(data){
   return this.http.postJSON('notes/deleteForeverNotes',data)
 }
 getTrashNotes()
 {
   return this.http.getHttp('notes/getTrashNotesList')
 }
 archiveNote(data)
 {
   return this.http.postJSON('notes/archiveNotes',data)
 }
 getArchiveNotes(){
   return this.http.getHttp('notes/getArchiveNotesList') 
 }
postlabels(data){
  return this.http.postJSON('noteLabels',data)
}
getLabelList(){
  return this.http.getHttp('noteLabels/getNoteLabelList')
}
deleteLabel(data){
  return this.http.encodedPostFormDelete('noteLabels/'+data+'/deleteNoteLabel')
}
updateLabel(dataid,data){
  return this.http.postJSON('noteLabels/'+dataid+'/updateNoteLabel',data)
}
addLabeltoNote(card,array){
  return this.http.postJSON('notes/'+card+'/addLabelToNotes/'+array+'/add','')
}
removeLabel(cardid,arrayid){
  return this.http.postJSON('notes/'+cardid+'/addLabelToNotes/'+arrayid+'/remove','')
}
getNotesOfLabel(label){
  return this.http.postJSON('notes/getNotesListByLabel/'+label,"")
}
addRemainder(data){
  console.log(data)
  return  this.http.postJSON('notes/addUpdateReminderNotes',data)
}
getRemainderList(){
  return this.http.getHttp('notes/getReminderNotesList')
}
removeRemainder(data){
  return this.http.postJSON('notes/removeReminderNotes',data)
}
addCheckList(noteid){
  return this.http.postJSON('notes/'+noteid+'/checklist/add','')
}
getCheckList(noteid){
  return this.http.getHttp('notes/'+noteid+'/noteCheckLists')
}
}
