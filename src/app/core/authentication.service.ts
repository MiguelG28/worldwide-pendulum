import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppState } from './appstate/index';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {
  constructor(private appState: AppState, private http: Http) { }

  login(username: string, password: string){
    return this.http.post('', JSON.stringify({username: username, password: password}))
      .map((response: Response) => {
        let user = response.json();
        if(user && user.token){
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.appState.current_user.id = user;
          this.appState.isAuthenticated = true;
        }
      });
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

}
