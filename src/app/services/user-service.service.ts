import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/user_data.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   httpOptions = {
    headers: new HttpHeaders({
     "Authorization" : environment.beToken
    }),
  };

  constructor(    private httpClient: HttpClient    ) { }



  public registerUser(data:UserData): Observable<UserData> {
    const completeUrl = environment.beUrl;
    return this.httpClient
      .post<UserData>(completeUrl, data, this.httpOptions);
  } 
  
 public getAllUser(): Observable<UserData[]> {
    const completeUrl = environment.beUrl+'/100';
    return this.httpClient
      .get<UserData[]>(completeUrl);
  } 

  //mock true because don't exist a login rest call
 public loginUser(data:UserData): boolean{
   return true;
  } 
}
