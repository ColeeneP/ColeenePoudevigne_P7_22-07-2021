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
  private formData: any;

  constructor(private http: HttpClient) { }


  createMessage(content: string, attachment: File):Observable<any>{
    let formData = new FormData();  
      formData.append('content', content);
      formData.append('attachment', attachment);
    return this.http.post(`${this.apiUrl}/message/createMessage`, formData);
  }

  getMessage(): Observable<any>{
    return this.http.get(`${this.apiUrl}/message/getAllMessages`);
  }

  likePost(id: string, like: boolean) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:3000/api/message' + id + '/like',
        {
          // userId: this.getUserId(),
          like: like ? 1 : 0,
          type: 'like'
        })
        .subscribe(
          (response: { message: string }) => {
            resolve(like);
          },
          (error) => {
            reject(error);
        }
      );
    });

  }
}

