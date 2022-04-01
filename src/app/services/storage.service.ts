import { Injectable } from '@angular/core';
import { UserData } from '../interfaces/user_data.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(     ) { }



  public setLoggedUser(user:UserData) {

     localStorage.setItem("user",JSON.stringify(user));
     localStorage.setItem("isLogged", "true");
  }
  
  public getLoggedUser() {

    if(localStorage.getItem("isLogged") && localStorage.getItem("user")){
      return localStorage.getItem("user");
    }
    return null;
  }

  public isLoggedIn(){
    if(localStorage.getItem("isLogged") && localStorage.getItem("user"))
      return true;
    return false;
  }

 
}
