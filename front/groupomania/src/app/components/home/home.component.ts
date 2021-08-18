import { Component, OnInit } from '@angular/core';
import { Response } from '../../models/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  status: string;
  loading: boolean;
  session = JSON.parse(localStorage.getItem('session'));

  posts: any;
  postSub: any;
  authUser: boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.loading = true;
  }
}
