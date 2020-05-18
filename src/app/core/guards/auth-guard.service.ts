import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //  we need to make sure the user is logged in by checking the token is present in local storage and its not expired
    if (this.authService.isLoggedIn()) {
      return true;
    }
    // otherwise navigate to login page
    this.router.navigate(['/login']);
    return false;
  }
}
