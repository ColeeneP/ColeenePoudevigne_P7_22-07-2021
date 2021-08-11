import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html'
})
export class ShowPostComponent implements OnInit {

  liked: boolean;

  constructor(private postService : PostService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onEdit():void {

  }

  onDelete(): void {
    
  }


}
