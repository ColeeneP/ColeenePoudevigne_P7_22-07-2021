import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {


  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }

  createPost():void {
    
  }

  onEdit():void {

  }

  onDelete(): void {
    
  }


}
