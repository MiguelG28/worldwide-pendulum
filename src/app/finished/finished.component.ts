import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../core/translate/translate.service';
import { NavService } from '../core/navigate/nav.service';
import { GravityPipe } from '.././shared/gravity.pipe';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit {

  private elements_arr = {
    'finished_title':'',
    'finished_value':''
  };
  
  constructor( private translateService : TranslateService,
               private navService: NavService) {
    this.navService.exitable = true;
    this.navService.nav_title = this.elements_arr['finished_title'];
  }

  ngOnInit() {
    this.translateService.langSubject.subscribe(lang => {
      this.translateService.refreshTranslations(this.elements_arr);
      this.navService.nav_title = this.elements_arr['finished_title'];
    });
    
  }

}
