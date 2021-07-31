import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Response } from '../../models/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: any;
  postSub: any;

  constructor(private postServices: PostService) { }

  ngOnInit(): void {
    this.postSub = this.postServices.getPost().subscribe(
      (response: Response) => {
        this.posts = response.result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
