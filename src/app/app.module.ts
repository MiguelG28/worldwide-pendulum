
import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from './guards/auth.guard';
import { ExperienciaPipe } from './shared/experiencia.pipe';
import { GravityPipe } from './shared/gravity.pipe';
import { TranslatePipe } from './core/translate/translate.pipe';

import { TranslateService } from './core/translate/translate.service';
import { NavService } from './core/navigate/nav.service';
import { AppStateService } from './core/appstate/state.service';
import { AuthenticationService } from './core/authentication.service';

import { TRANSLATION_PROVIDER } from './core/translate/translator';
//import { NAV_CONFIG_PROVIDER } from './core/navigate/nav';
import { APP_CONFIG_PROVIDER } from './core/appstate/app.state';

import { NavComponent } from './shared/nav/nav.component';
import { AppHeaderComponent } from './shared/app-header/app-header.component';
import { MainSectionComponent } from './shared/main-section/main-section.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { UserAlertComponent } from './shared/user-alert/user-alert.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchedComponent } from './start/sched/sched.component';
import { StartComponent } from './start/start.component';
import { DataViewComponent } from './data-view/data-view.component';

import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { ActiveComponent } from './active/active.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { BlockedComponent } from './blocked/blocked.component';
import { FinishedComponent } from './finished/finished.component';

import { MdDataTable, MdDataTableHeaderSelectableRow, MdDataTableSelectableRow } from './shared/data-table/index';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddUserComponent } from './admin-panel/add-user/add-user.component';

import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AppHeaderComponent,
    WelcomeComponent,
    SchedComponent,
    NavComponent,
    StartComponent,
    DashboardComponent,
    DataViewComponent,
    ExperienciaPipe,
    GravityPipe,
    TranslatePipe,
    MainSectionComponent,
    SpinnerComponent,
    UserAlertComponent,
    ActiveComponent,
    LoginComponent,
    ForbiddenValidatorDirective,
    BlockedComponent,
    FinishedComponent,
    MdDataTable,
    MdDataTableHeaderSelectableRow,
    MdDataTableSelectableRow,
    AdminPanelComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouting,
    FlexLayoutModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MaterialModule
  ],
  providers: [ TranslateService, NavService, AppStateService, AuthenticationService, TRANSLATION_PROVIDER,  APP_CONFIG_PROVIDER], //NAV_CONFIG_PROVIDER,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
