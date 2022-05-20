import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor

}
from '@angular/common/http'
import { AuthService } from './auth.service';
import {Observable, observable} from 'rxjs'
@Injectable()
export class Httpinterceptor  {
  signedIn=false;
  constructor(private auth:AuthService){
    this.auth.signedIn$.subscribe((signedIn)=>{
      this.signedIn=signedIn
    })
  }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let user:any = localStorage.getItem('user');
      user=JSON.parse(user)

      let modified;
      if(this.signedIn){

        modified=req.clone({
          headers:req.headers.set('Authorization',`Bearer ${user?.token}`)
      })
      }else{
          modified=req
      }

          return next.handle(modified)
    }


}
