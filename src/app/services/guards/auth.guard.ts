import { Injectable } from '@angular/core';
import { CanActivate ,ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { promise } from 'protractor';
import{Observable, from}from'rxjs';
import{AuthService} from'../auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private as :AuthService, private roter:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean|Observable<boolean>|Promise<boolean> {
  return new Promise(resolve=>{
this.as.user.subscribe(user=>{
  if (user) resolve(true);
  else{
    this.roter.navigate(['/login'])
    resolve(false)
  }
})
  })
  }
}
