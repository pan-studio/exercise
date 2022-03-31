import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/user_data.interface';
import { environment } from 'src/environments/environment';
import { HttpCustomResponse } from '../models/http-response';

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
    const completeUrl = environment.beUrl + '/login/cashback/wind';
    return this.httpClient
      .post<UserData>(completeUrl, data, this.httpOptions);
  } 
  
 public getAllUser(): Observable<UserData[]> {
    const completeUrl = environment.beUrl + '/login/cashback/wind';
    return this.httpClient
      .get<UserData[]>(completeUrl);
  } 

 public loginUser(data:UserData): Observable<UserData> {
    const completeUrl = environment.beUrl + '/login/cashback/wind';
    return this.httpClient
      .post<UserData>(completeUrl, data, this.httpOptions);
  } 
}
