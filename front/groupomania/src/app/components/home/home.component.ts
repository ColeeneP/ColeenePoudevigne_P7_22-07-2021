import { Component, OnInit } from '@angular/core';
import { Response } from '../../models/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  status: string;

  posts: any;
  postSub: any;
  authUser: boolean=false;

  constructor() { }

  ngOnInit(): void {

  }
}
