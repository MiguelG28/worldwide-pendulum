import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { TranslateService } from '../core/translate/translate.service';
import { NavService } from '../core/navigate/nav.service';
//import { AppStateService } from '../core/appstate/state.service';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
    
    private elements_arr = {
      'login_title':'',
      'username':'',
      'password':'',  
    };
    
    loginForm: FormGroup;
    
    constructor( private translateService : TranslateService,
               /* use the navService here to set back button caption to home */
               private navService: NavService,
               public fb: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private location: Location,
               //private ass: AppStateService,
               //private auths: AuthenticationService
               ) {
    this.navService.exitable = true;
    
    this.loginForm = this.fb.group({
      'username': new FormControl('Username', Validators.required),
      'password': new FormControl('Password', Validators.required)
    });

  }

  doLogin(val: any){
    //this.auths.login();
  }

  ngOnInit() {
  }

}
