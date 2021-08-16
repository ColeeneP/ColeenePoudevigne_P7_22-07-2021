import { HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }
  newRequest: HttpRequest<any>;
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    let authToken = null;
    if (JSON.parse(sessionStorage.getItem('session'))){
      authToken = JSON.parse(sessionStorage.getItem('session')).token;
      this.newRequest = req.clone({
      withCredentials: false ,
      headers: req.headers.set('authorization', 'Bearer ' + authToken)
      });
    } else{
      authToken = '';
    }
    this.newRequest = req.clone({
      withCredentials: false ,
      headers: req.headers.set('authorization', 'Bearer ' + authToken)})
    return next.handle(this.newRequest);
  }
}
//intercepte chaque requette pour y injecter le headers d’autorization