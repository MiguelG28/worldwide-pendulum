import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { TranslateService } from '../core/translate/translate.service'
import { SchedComponent } from './sched/sched.component';
import { NavService } from '../core/navigate/nav.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  
  @Input() activeTab: number;
  
  private elements_arr = {
    'start_title':'',
    'sched_title':'',
    'start_tab_title':'',
    'sched_tab_title':'',
    'start_tab_start_button':'',
    'confirm':'',
    'oscillations':'',
    'initial_distance':''
  };

  isActualEmail(c : FormControl){
    
  }

  private launchForm: FormGroup;
  
  constructor(private translateService: TranslateService, 
              public fb: FormBuilder,
              private navService: NavService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { 
    
    this.activeTab = parseInt( location.path()[location.path().length - 1], 10 );
    console.log("ACTIE TAB"+this.activeTab)

    this.launchForm = this.fb.group({
      'oscillations': new FormControl('10', Validators.required),
      'initial_distance': new FormControl('100cm', Validators.required)
    });
  }

  public launch_machine(val: any){
    console.log(val);
    console.log(this.launchForm);
  }

  ngOnInit() {
    this.translateService.langSubject.subscribe(lang => {
      this.translateService.refreshTranslations(this.elements_arr);
      this.navService.nav_title = this.elements_arr['start_title'];
    });
    
    this.activeTab = this.route.snapshot.params['tab'];
  }

  changeIndexHandler(ev: number){
    this.activeTab = ev;
    let newPath: string = this.location.path();
    newPath = newPath.substr(0, newPath.length - 1) + this.activeTab;
    this.location.replaceState( newPath );// location.go doesn't navigate to tab
  }
}
