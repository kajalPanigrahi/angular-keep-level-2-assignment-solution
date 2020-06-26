import { Note } from './note';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  btnCSSClass : string;
  btnText : string;
  isLoggedIn : boolean;
  isDisabled : boolean;

  data :Observable<number>;
  values : Array<number> = [];
  error : boolean;
  finished : boolean;

  

  

  constructor(){
    
  //  this.contact = new Contact(1,'Stackroute Ltd','info@stackroute.in',345345,true,'US');
    // this.btnCSSClass = 'btn btn-warning';
    // this.btnText = 'Login';
    // this.isLoggedIn = false;
    // this.contactsList = [
    //   this.contact,
    //   new Contact(2,'Madhu Samala','Madhu@gmail.com',45354,false,'India'),
    //   new Contact(3,'Anthony','Anthony@gmail.com',555555,true,'US')
    // ];
    
    // this.note.id = 1;
    // this.note.title = 'fist note';
    // this.note.text = 'note description';

    //Should fetch the data from the server and display that into the UI
    //http get api call, and get the response and process the response
  }

  ngOnInit(){
    // if(this.isLoggedIn){
    //   this.btnCSSClass = 'btn btn-success';
    //   this.btnText = 'Already LoggedIn'
    //   this.isDisabled = true;
    // }
    // else{
    //   this.btnCSSClass = 'btn btn-danger';
    //   this.btnText = 'Login';
    //   this.isDisabled = false;
    // }

    
  }

  loginSubmit(){
    
  }  

}