import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  auth: boolean;

  constructor() { }

  ngOnInit(): void {
    if (!sessionStorage.session) {
      this.auth = false;
    }
    else {
      this.auth = true;
    }
  }

  onLogout(): void {
    sessionStorage.clear()
  }
}
