import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../core/translate/translate.service';
import { NavService } from '../core/navigate/nav.service';
import { GravityPipe } from '.././shared/gravity.pipe';
import { NgbModule, NgbTimepickerConfig, NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.component.html',
  styleUrls: ['./blocked.component.css']
})
export class BlockedComponent implements OnInit {

  private elements_arr = {
    'blocked_title':'',
    'blocked_message':'',
    'blocked_timer_caption':''
  };

  constructor( private translateService : TranslateService,
               /* use the navService here to set back button caption to home */
               private navService: NavService) {
    this.navService.exitable = true;

  }
  ngOnInit() {
    
  }

}
