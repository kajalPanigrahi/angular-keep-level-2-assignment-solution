import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthenticationService {
  private authURL = 'http://localhost:3000/auth/v1/';

  constructor(private httpClient : HttpClient) { }

  isUserAuthenticated(token): Promise<boolean> {
    return this.httpClient.post(`${this.authURL}isAuthenticated`, {}, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      })
      .map((res) => {
      return res['isAuthenticated'];
      })
      .toPromise();
    }

  authenticateUser(userobject:any,){
    return this.httpClient.post(this.authURL,userobject);
  }

  setBearerToken(token:string){
    localStorage.setItem('bearerToken',token);
  }
  getBearerToken(){
    return localStorage.getItem('bearerToken');
  }
}
