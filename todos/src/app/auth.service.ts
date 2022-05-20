import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedIn$=new BehaviorSubject(false)
  user:any=''

  constructor(private http:HttpClient,private router:Router) {
    let user:any = localStorage.getItem('user');
     user=JSON.parse(user)
      if(user){
        this.signedIn$.next(true);
      }
  }

  signUp(form:any){
    return this.http.post("http://localhost:6001/api/users",form).pipe(
      tap(()=>{this.signedIn$.next(true)})
     )
  }

  signIn(form:any){
    return this.http.post("http://localhost:6001/api/users/login",form).pipe(
     tap(()=>{this.signedIn$.next(true)})
    )
  }

  signOut(){
    localStorage.removeItem('user');
    this.router.navigate(['signin'])
    this.signedIn$.next(false);

  }

  createGoal(goal:any){

    return this.http.post("http://localhost:6001/api/goals",{
      text:goal
    })
  }

  getGoals(){
    return this.http.get("http://localhost:6001/api/goals");
  }
  deleteGoal(id:string){
    return this.http.delete("http://localhost:6001/api/goals/"+id)
  }
  getUser(){
    return this.http.get("http://localhost:6001/api/users/me")

  }
}
