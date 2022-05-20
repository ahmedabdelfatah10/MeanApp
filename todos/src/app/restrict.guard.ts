import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestrictGuard implements CanActivate {
  signedIn=false;

  constructor(private auth:AuthService,private router:Router){
    this.auth.signedIn$.subscribe((signedIn)=>{
      this.signedIn=signedIn
    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.signedIn){
        return true
      }else{
        this.router.navigate(['signin'])
        return false;

      }
  }

}
