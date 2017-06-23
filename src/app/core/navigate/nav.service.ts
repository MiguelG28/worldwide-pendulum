
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { TranslateService } from '../translate/translate.service';
import { APP_CONFIG } from '../appstate/app.state';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/**
 * This calss is a singleton and thus get's called only once.
 * Welcome title is set once the first time.
 */
@Injectable()
export class NavService {
  

  public title: BehaviorSubject<string>;

  constructor(@Inject(APP_CONFIG) 
              public appState: any, 
              private translateService : TranslateService) {   
    this.appState.nav_title = this.translateService.translate('welcome_title')
    this.title = new BehaviorSubject<string>(this.appState.nav_title);
  }

  get nav_title(): string{
    return this.appState.nav_title.value;
  }

  set nav_title(s: string){
    let _s = this.translateService.translate(s.trim());
    if(_s !== null && _s !== undefined && _s.length > 0){
      this.title.next( this.translateService.translate(s.trim()) );
    }
  }

  get back_visible(){
    return this.appState.back_visible;
  }

  set back_visible(val: boolean){
    this.appState.back_visible = val;
  }

  get exitable(){
    return this.appState.exitable;
  }

  set exitable(val: boolean){
    this.appState.exitable = val;
  }

  get tutorial_mode(){
    return this.appState.tutorial_mode;
  }

  set tutorial_mode(val: boolean){
    this.appState.tutorial_mode = val;
  }
  

}
