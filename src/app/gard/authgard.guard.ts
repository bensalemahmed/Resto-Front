import { AdminService } from './../Service/admin.service';
import { Injectable } from '@angular/core';
import { Router , CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthgardGuard implements CanActivate {
  constructor(
    private _router :Router,
    private adminService : AdminService
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.adminService.isLoggedIn()) {
        return true;
      }

      this._router.navigate(['/login'] );
      return false;
    }

}
