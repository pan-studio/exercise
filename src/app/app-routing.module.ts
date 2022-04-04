import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { PermissionGuard } from './guards/permission.guard';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'list', component: UsersListComponent, canActivate: [PermissionGuard]},
  {path: 'login', component: LoginFormComponent} ,
  {path: 'register', component: RegisterFormComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
