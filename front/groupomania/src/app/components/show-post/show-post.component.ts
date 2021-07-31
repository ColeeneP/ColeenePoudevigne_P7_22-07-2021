import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {

  @Input() posts!: Post[];
  postOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(post : Post):void {
    this.postOpen = true;
  }

  onDelete(post: Post): void {
    
  }

  addPost():void {
    this.postOpen = true;
  }
}
