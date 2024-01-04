import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/user-login/user-login.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //Base url
  private baseurl = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient, private router: Router) {}

  saveUserDetails(user: User): Observable<any> {
    let url = this.baseurl + 'users';
    return this.http.post(url, user);
  }

  login(userLogin: UserLogin): Observable<any> {
    let url = this.baseurl + 'users/connexion';
    return this.http.post(url, userLogin);
  }
}
