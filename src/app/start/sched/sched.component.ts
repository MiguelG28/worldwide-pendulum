import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../core/translate/translate.service'
import { NavService } from '../../core/navigate/nav.service'

/*FormGroup is an interface that "schedForm"" implements*/
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { NgbModule, NgbTimepickerConfig, NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ISchedule } from '../../core/schedule.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sched',
  templateUrl: './sched.component.html',
  styleUrls: ['./sched.component.css']
})
export class SchedComponent implements OnInit {

  public schedForm: FormGroup;
  public submitted: boolean;

  public events: any[] = [];
  public useRepeat: boolean = false;
  public repeatInterval: boolean = false; 
  public repeatIndeterminate: boolean = false; 
  
  constructor(private translateService: TranslateService, private fb: FormBuilder, private router: Router, private ns: NavService) { }

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

  ngOnInit() {
    

    this.translateService.langSubject.subscribe(lang => {
      this.translateService.refreshTranslations(this.elements_arr);
      this.ns.nav_title = this.elements_arr['start_title'];
    });

    //This syntax comes from FormBuilder class.
    this.schedForm = this.fb.group({
      'date': [ null , <any>Validators.required],
      'time': [ <NgbTimeStruct> {hour:10, minute:10, second: 0} , <any>Validators.required],
      'timeinterval': [ <NgbTimeStruct> {hour:10, minute:10, second: 0}, <any>Validators.required ],
      'user': null,
      'oscillations' : [ '10', Validators.compose[<any>Validators.required, <any>Validators.maxLength(3)] ],
      'initialDistance' : [ '100cm', Validators.compose[<any>Validators.required, <any>Validators.maxLength(3)] ]
    });
    
    this.schedForm.valueChanges.subscribe((e: any)=>{
      console.log(this.schedForm.value);
      console.log("Sched form value changed.");
    });
    
  }

  schedule(model: ISchedule, isValid: boolean){

  }

}
