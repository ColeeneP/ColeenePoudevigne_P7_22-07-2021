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


  createMessage(attachment: File):Observable<any>{
    let formData = new FormData();  
      formData.append('attachment', attachment);
    return this.http.post(`${this.apiUrl}/message/createMessage`, formData);
  }

  getAllMessages(): Observable<any>{
    return this.http.get(`${this.apiUrl}/message/getAllMessages`);
  }
  
  getOneMessage(id: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/message/getOneMessage/` + id);
  }

  modifyMessage(id: string, attachment: File): Observable<any>{
    let formData = new FormData();  
    formData.append('idPost', id);
    formData.append('attachment', attachment);
    return this.http.put(`${this.apiUrl}/message/modifyMessage/` + id, formData);
  }

  deleteMessage(id: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/message/deleteMessage/` + id);
  }
}

