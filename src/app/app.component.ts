import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateService } from './core/translate/translate.service';
import { User } from './core/appstate/index'
import { NavService } from './core/navigate/nav.service';
import { AppStateService } from './core/appstate/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public nav_name: string;
  
  constructor(private ass: AppStateService, private ns: NavService) {
    
    console.log(ass.current_user);
    console.log(ass.appState.isAuthenticated)
    
    ass.appState.isAuthenticated = true;
    
    /*Check later if there is a user in localStorage before setting this*/
    ass.appState.current_user = new User('0', 'anon','visitor', false, false);
    ass.appState.back_visible = true;
    ass.appState.exitable = true;

    this.ns.title.subscribe(val => {
      this.nav_name = val;
    });
  }

  ngOnInit(){
    
  }

}
