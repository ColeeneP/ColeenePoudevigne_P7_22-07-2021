import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = environment.api;
  private authToken: string;
  private formData: any;

  constructor(private http: HttpClient) { }


  createComment(idMessage: string, content: string):Observable<any>{
    let formData = new FormData();  
      formData.append('idMessage', idMessage)
      formData.append('content', content);
    return this.http.post(`${this.apiUrl}/comment/createComment`, formData);
  }

  getAllComments(): Observable<any>{
    return this.http.get(`${this.apiUrl}/comment/getAllComments`);
  }

  getOneComment(id: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/comment/getOneComment/` + id);
  }

  modifyComment(id: string, content: string): Observable<any>{
    let formData = new FormData();  
    formData.append('idComment', id);
    formData.append('content', content);
    return this.http.put(`${this.apiUrl}/comment/modifyComment/` + id, formData);
  }

  deleteComment(id: string): Observable<any>{
    return this.http.delete(`${this.apiUrl}/comment/deleteComment/` + id);
  }
}

