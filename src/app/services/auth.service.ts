import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: User): Observable<any>{
    return this.http.post<any>('https://localhost:7272/api/users/register', user);
  } 

  public login(user: User): Observable<string>{
    return this.http.post('https://localhost:7272/api/users/login', user, { responseType: 'text'});
  } 

  public getMe(): Observable<string>{
    return this.http.get('https://localhost:7272/api/users/getme', { responseType: 'text'});
  }
}