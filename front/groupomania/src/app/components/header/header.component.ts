import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  auth: boolean;
  loading: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isAuth();
          
  }

  isAuth(){
    if (!sessionStorage.session) {
      this.auth = false;
      this.loading = false
    }
    else {
      this.auth = true;
      this.loading = false
    } 

  }

  onLogout(): void {
    sessionStorage.clear()
    this.loading = false
  }
}
