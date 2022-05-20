import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error=''
  RegisterForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.pattern( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
    confirmpassword:new FormControl('',[Validators.required])
  })

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.RegisterForm.valid){
      return;
    }
    this.auth.signUp(this.RegisterForm.value).subscribe({

      next:(res:any)=>{
        console.log('success')
      localStorage.setItem('user',JSON.stringify(res))
      this.router.navigate([''])
    },

    error:(err)=>{
      console.log('error')
      console.log(err.error.message)
      this.error=err.error.message
    }})
  }


}
