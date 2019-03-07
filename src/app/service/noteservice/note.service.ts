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
 

}
