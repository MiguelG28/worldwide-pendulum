import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppStateService } from '../core/appstate/state.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AppStateService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
        // logged in so return true
        console.log("WE ARE IN")
        return true;
    }  
    // not logged in so redirect to login page with the return url
    console.log("WE ARE not IN")
    this.router.navigate(['/login']);
    return false;
  }
}

