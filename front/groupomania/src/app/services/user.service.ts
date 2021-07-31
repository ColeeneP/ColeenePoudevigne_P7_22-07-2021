import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { newUser, logUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.api;
  private authToken: string;
  
  constructor(private httpClient: HttpClient,
              private router: Router) { }

  newUser(signupRequest: newUser){
    return this.httpClient.post(`${this.apiUrl}/user/signup`, signupRequest);
  }

  logUser(loginRequest: logUser) {
    return this.httpClient.post(`${this.apiUrl}/user/login`, loginRequest);
  }

  getToken() {
    return this.authToken;
  }

  logout() {
    this.authToken = null;
    this.router.navigate(['login']);
  }
}
