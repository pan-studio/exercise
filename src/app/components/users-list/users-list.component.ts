import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/interfaces/user_data.interface';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService: UserService) { }
  users:UserData[];
  ngOnInit(): void {
    this.userService.getAllUser().subscribe(res=>{
      this.users = res;
    })
  }

}
