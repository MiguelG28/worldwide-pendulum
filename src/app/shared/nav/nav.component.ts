
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { TranslateService } from '../../core/translate/translate.service';
import { NavService } from '../../core/navigate/nav.service';
import { AppStateService } from '../../core/appstate/state.service'
import { User } from '../../core/appstate/index'

import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() isAuthenticated: boolean;
  private currentUser: User; 

  private elements_arr = {
    'shutdown':'',
    'language':'',
    'authenticate':'',
    'back':'',
    'tutorial_mode':'',
    'language_changed':''
  };

  changeLang(lang: string){
    this.translateService.setCurrentLang( lang.trim() );
    this.showSnack( this.elements_arr['language_changed'], 'OK' );
  }

 constructor(
    private ass: AppStateService,
    private translateService : TranslateService,
    private snackbar: MdSnackBar,
    public viewContainerRef: ViewContainerRef,
    private navService: NavService
  ) { 
    console.log("Authenticated:" + this.isAuthenticated);
  }
  
  ngOnInit() {
    this.translateService.langSubject.subscribe(lang => {
      this.translateService.refreshTranslations(this.elements_arr);
    });
  }

  /*TODO change into service*/
  showSnack(message: string, button_val: string){
    let config = new MdSnackBarConfig();
    this.snackbar.open(message, button_val);
    setTimeout(() => {
        this.snackbar.dismiss();
    }, 1337)
  }
 
}
