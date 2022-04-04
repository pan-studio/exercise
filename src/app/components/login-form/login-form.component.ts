import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginFormGroup:FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
    });
  constructor(private router:Router, private storageService: StorageService, private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    let userData = {
      email:this.loginFormGroup.controls.email.value,
      password: this.loginFormGroup.controls.password.value
    }
  this.userService.loginUser(userData.email, userData.password);
  this.router.navigateByUrl('/list');
  }

}
