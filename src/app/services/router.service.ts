import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class RouterService {

  constructor(private router : Router) { }

  routeToLogin(){
    this.router.navigate(['login']);
  }

  routeToDashboard(){
    this.router.navigate(['dashboard']);
  }
}
