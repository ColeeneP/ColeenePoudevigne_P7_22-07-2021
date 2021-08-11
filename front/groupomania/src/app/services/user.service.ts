import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { newUser, logUser } from '../models/user';
import { Observable } from 'rxjs';

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

  getOneProfil(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/user/getOneUser`);
  }

  modifyProfil(name:string, firstname: string, email:string, bio: string, imgProfile: File): Observable<any>{
    let formData = new FormData();  
    formData.append('name', name);
    formData.append('firstname', firstname);
    formData.append('email', email);
    formData.append('bio', bio);
    formData.append('imgprofile', imgProfile, imgProfile.name);
    
    return this.httpClient.put(`${this.apiUrl}/user/modifyUser`,formData);

  }

  deleteProfil() {
    return this.httpClient.delete(`${this.apiUrl}user/deleteUser`)
  }
}
