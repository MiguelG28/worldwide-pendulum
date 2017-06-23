

import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TranslateService } from '../../core/translate/translate.service';
import { NavService } from '../../core/navigate/nav.service';

import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    
    private elements_arr = {
      'login_title':'',
      'username':'',
      'password':'',
      'repeat_password':''
    };
    loginForm: FormGroup;
    
    constructor( private translateService : TranslateService,
               /* use the navService here to set back button caption to home */
               private navService: NavService,
               public fb: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private location: Location) {
    this.navService.exitable = true;
    
    this.loginForm = this.fb.group({
      'username': new FormControl('Username', Validators.required),
      'password': new FormControl('Password', Validators.required),
      'repeat_password': new FormControl('Password', Validators.required)
    });
  }

  ngOnInit() {
  }

}
