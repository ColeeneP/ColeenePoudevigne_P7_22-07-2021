
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private authToken: string;

  constructor(private auth: UserService,
    private router: Router,) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return Observable.create(
      (observer) => {
        this.authToken = sessionStorage.getItem('session');
        //Vérification du token de l'utilisateur soit via le cookie soit via en direct
        if (this.authToken) {
          observer.next(true);
        } else {
          this.auth.isAuth$.subscribe(
            (auth) => {
              if (auth) {
                observer.next(true);
              } else {
                this.router.navigate(['/loginComponent']);
              }
            }
          );
        }

      }
    );
  }
}