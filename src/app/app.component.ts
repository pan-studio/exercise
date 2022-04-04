import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exercise';
  isLogged = false;
  constructor(private router:Router, private storageService: StorageService){ }  
     
     ngOnInit(): void {
        if(!this.storageService.isLoggedIn()){
          this.router.navigateByUrl('/login');
        } else {
          this.router.navigateByUrl('/list');
        }
  }
  
}
