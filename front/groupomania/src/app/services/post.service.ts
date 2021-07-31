import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = environment.api+'/message';

  constructor(private http: HttpClient) { }

  getPost(): Observable<Response>{
    return this.http.get<Response>(this.baseUrl);
  }
}

