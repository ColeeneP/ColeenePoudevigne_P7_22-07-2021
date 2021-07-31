import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { createMessage } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = environment.api;
  private authToken: string;

  constructor(private http: HttpClient) { }

  getPost(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  createMessage(createMessageRequest: createMessage){
    return this.http.post(`${this.apiUrl}/message/createMessage`, createMessageRequest);
  }
}

