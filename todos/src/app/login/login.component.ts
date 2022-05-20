import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error=''
  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),

  })

  constructor(private auth:AuthService,private router:Router ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    this.auth.signIn(this.loginForm.value).subscribe({
     next: (res:any)=>{
      console.log(res)
      localStorage.setItem('user',JSON.stringify(res))
      this.router.navigate([''])
    },

    error:(err)=>{
      console.log(err.error.message)
      this.error=err.error.message
    }


  })
  }
}
