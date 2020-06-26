import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Note } from '../note';
import { Injectable } from '@angular/core';

@Injectable()

export class NotesService {

  constructor(private http: HttpClient,private authService : AuthenticationService) { 
  }

  getNotes() : Observable<Array<Note>>{
    return this.http.get<Array<Note>>('http://localhost:3000/api/v1/notes',{
      headers:new HttpHeaders().set('Authorization',`Bearer ${this.authService.getBearerToken()}`)
    });
  }
  addNote(note : Note):Observable<Note>{
    return this.http.post<Note>('http://localhost:3000/api/v1/notes',note,{
      headers:new HttpHeaders().set('Authorization',`Bearer ${this.authService.getBearerToken()}`)
    });
  }
}
