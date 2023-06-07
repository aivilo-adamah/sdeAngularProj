import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OlipageGuard implements CanActivate {

  router:Router;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLogged:boolean = false;
    if(!isLogged){
      this.router.navigate(['/login']);
     return false;
    }
      return true;
  }

constructor(router:Router){
  this.router=router;
}  
}

