
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
 inputValue=''
 goals:any=[]
  user:any
  constructor(private auth:AuthService){}
  ngOnInit(): void {
    this.auth.getGoals().subscribe((res)=>{
      this.goals=res;
    })
    this.auth.getUser().subscribe((res:any)=>{
      this.user=res.name
     
    })
  }
  onCreate(){
    this.auth.createGoal(this.inputValue).subscribe((res)=>{
     this.goals.push(res)
    })
  }
 
  onDelete(goal:any){
  
     this.auth.deleteGoal(goal._id).subscribe((res)=>{
       this.goals=this.goals.filter((g:any)=>{
         return g._id !== goal._id
       })
     })
  }
}
