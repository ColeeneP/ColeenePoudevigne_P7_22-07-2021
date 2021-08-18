import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  auth: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isAuth();      
  }

  isAuth(){
    if (!localStorage.session) {
      this.auth = false;
    }
    else {
      this.auth = true;
    } 

  }

  onLogout(): void {
    localStorage.clear()
  }
}
