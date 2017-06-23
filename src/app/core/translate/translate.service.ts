import { Injectable, Inject, ApplicationRef } from '@angular/core';
import { TRANSLATIONS } from './translator';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TranslateService {
  
  langSubject: BehaviorSubject<string>;  
  
  constructor( @Inject(TRANSLATIONS) private _translations: any ) { 
    this.langSubject = new BehaviorSubject<string>("pt-PT");
  }

  public get currentLang(): string{
    return this.langSubject.value;
  }
  
  public setCurrentLang(lang){
    this.langSubject.next(lang);
    console.log("Service changing current lang to " + lang);
  }

  public translate(key: string) : string {
    let translation = key;
    if( this._translations[this.currentLang] && this._translations[this.currentLang][key] ){
      return this._translations[this.currentLang][key];
    }
    return translation;
  }

  public refreshTranslations(elements_arr: any): any {
    for(let property in elements_arr){
      elements_arr[property] = this.translate(property);
    }
    return elements_arr;
  }
  
}
