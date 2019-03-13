import { Injectable } from '@angular/core';
import { HttpserviceService } from '../../service/httpservice.service'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpserviceService) { }
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


}
