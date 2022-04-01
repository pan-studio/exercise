import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exercise';
  isLogged = false;
  constructor(private storageService: StorageService){ }  
     
     ngOnInit(): void {
        if(this.storageService.isLoggedIn()){
          this.isLogged = true;
        }
  }
  
}
