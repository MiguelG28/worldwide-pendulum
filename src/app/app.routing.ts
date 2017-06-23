import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DataViewComponent } from './data-view/data-view.component';
import { ActiveComponent } from './active/active.component';
import { FinishedComponent } from './finished/finished.component';
import { BlockedComponent } from './blocked/blocked.component';
import { StartComponent } from './start/start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

 
const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'data-view', component: DataViewComponent },
  { path: 'active', component: ActiveComponent },
  { path: 'finished', component: FinishedComponent },
  { path: 'blocked', component: BlockedComponent },
  { path: 'start/:tab', component: StartComponent },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {}