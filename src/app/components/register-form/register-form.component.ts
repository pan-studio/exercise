import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerFormGroup:FormGroup = new FormGroup({
    email: new FormControl(""),
    name: new FormControl(""),
    gender: new FormControl(""),
  });
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register(){
    let userData = {
      email:this.registerFormGroup.controls.email.value,
      name: this.registerFormGroup.controls.name.value,
      gender: this.registerFormGroup.controls.gender.value,
      status: "active"
    }
  this.userService.registerUser(userData).subscribe(
      res=>{
        
      }
    )
  }

}
