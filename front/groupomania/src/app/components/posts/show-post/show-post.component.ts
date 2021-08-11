import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { getAllMessages } from 'src/app/models/post'

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html'
})
export class ShowPostComponent implements OnInit {

  allMessages: getAllMessages;
  liked: boolean;

  constructor(private postService : PostService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage(){
    this.postService.getMessage().subscribe(response => {
      this.allMessages = response,
      console.log(this.allMessages);
    })
  }

  onEdit():void {

  }

  onDelete(): void {
    
  }


}
