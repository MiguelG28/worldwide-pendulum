import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '../core/translate/translate.service';
import { NavService } from '../core/navigate/nav.service';
import { GravityPipe } from '.././shared/gravity.pipe';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModule, NgbTimepickerConfig, NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { MdDataTable } from '../shared/data-table/index';

class material{
  constructor(private name:String,
              private quantity: Number,
              private price:Number,
  ){}
};

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  @Input() activeTab;

  private elements_arr = {
    'admin_panel_title':'',
    'blocked_message':'',
    'blocked_timer_caption':'',

    'start_title':'',
    'sched_title':'',
    'start_tab_title':'',
    'sched_tab_title':'',
    'start_tab_start_button':'',
    'confirm':'',
    'oscillations':'',
    'initial_distance':''
  };

  private userForm: FormGroup;
 
  
  private materials = [
      new material('Alex', 1, 1),
      new material('Balex', 2, 2),
      new material('Calex', 2, 3),
      new material('Alex', 1, 1),
      new material('Balex', 2, 2),
      new material('Calex', 2, 3),
      new material('Alex', 1, 1),
      new material('Balex', 2, 2),
      new material('Calex', 2, 3),
      new material('Alex', 1, 1),
      new material('Balex', 2, 2),
      new material('Calex', 2, 3),
      new material('Alex', 1, 1),
      new material('Balex', 2, 2),
      new material('Calex', 2, 3)
  ]

  
  constructor( private translateService : TranslateService,
               /* use the navService here to set back button caption to home */
               private navService: NavService,
               public fb: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private location: Location) {
    this.navService.exitable = true;
    this.activeTab = 0;
    this.userForm = this.fb.group({
      'oscillations': new FormControl('10', Validators.required),
      'initial_distance': new FormControl('100cm', Validators.required)
    });
  }
  ngOnInit() {
    this.translateService.langSubject.subscribe(lang => {
      this.translateService.refreshTranslations(this.elements_arr);
      this.navService.nav_title = this.elements_arr['admin_panel_title'];
    });
    
  }
  changeIndexHandler(event){
    console.log(event)
  }

}
