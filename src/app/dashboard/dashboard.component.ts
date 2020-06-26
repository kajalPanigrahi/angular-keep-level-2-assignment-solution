import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  note : Note;
  notes : Array<Note>;
  errorMessage : string;
  constructor(private noteService : NotesService) { 
    this.note = new Note();
    this.notes = [];
  }

  ngOnInit() {
    this.noteService.getNotes().subscribe(notesListResponse =>{
      this.notes = notesListResponse;
    },
   error =>{
    this.errorMessage = error.message;
  })
  }

  addNote(){
    if (this.note.title !== '' && this.note.text !== '') {
      this.notes.push(this.note);
      this.noteService.addNote(this.note).subscribe(
        data => {},
        err => {
          const index: number = this.notes.findIndex(note => note.title === this.note.title);
          this.notes.splice(index, 1);
          this.errorMessage = err.message;
        }
      );
      this.note = new Note();
    } else {
      this.errorMessage = 'Title and Text both are required fields';
    }
  }
}
