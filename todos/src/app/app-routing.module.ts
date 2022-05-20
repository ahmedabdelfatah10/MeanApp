import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodosComponent } from './todos/todos.component';
import { RestrictGuard } from './restrict.guard';
import { RestrictSignInGuard } from './restrict-sign-in.guard';


const routes: Routes = [
  {path:'',component:TodosComponent,canActivate:[RestrictGuard]},
  {path:'signin',component:LoginComponent,canActivate:[RestrictSignInGuard]},
  {path:'signup',component:RegisterComponent,canActivate:[RestrictSignInGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
