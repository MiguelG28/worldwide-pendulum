
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { APP_CONFIG, AppState } from './app.state';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user.model';

@Injectable()
export class AppStateService {
  
  public current_user: BehaviorSubject<User>  

  constructor(@Inject(APP_CONFIG) public appState : any) {  
    console.log("Injected")
  }
  
  getCurrentUser(){
    return '';
  }

  isAuthenticated(): boolean{
    return false;
  }
}
