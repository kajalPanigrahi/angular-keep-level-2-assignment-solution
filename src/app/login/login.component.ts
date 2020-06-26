import { Component, OnInit} from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('', [ Validators.required ]);
  password = new FormControl('', [ Validators.required ]);
  public submitMessage: string;

  constructor(private authService : AuthenticationService,private router: RouterService) { 
  }

  ngOnInit() {
  }

  loginSubmit(){

    //Validate this user against the Server
    //get the token and store this in my localStorage
    //Navigate him to dashboard page
    this.authService.authenticateUser({
      username: this.username.value,
      password: this.password.value}).subscribe(res =>{
      this.authService.setBearerToken(res['token']);
      this.router.routeToDashboard();
    },err =>{
      if (err.status === 403) {
        this.submitMessage = err.error.message;
      } else {
        this.submitMessage = err.message;
      }
    })
  }

  getErrorMessage() {

    return this.username.hasError('required') ? 'You must enter a value' :
 
          this.password.hasError('required') ? 'You must enter a value ' :
 
            '';
 
  }

}
