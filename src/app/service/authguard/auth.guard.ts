import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../../service/authservice/auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
   
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    
    return true;
}
}
