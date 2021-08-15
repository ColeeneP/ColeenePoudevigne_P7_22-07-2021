import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { getAllMessages } from 'src/app/models/post';
import { getOneMessage } from 'src/app/models/post';
import { getAllComments } from 'src/app/models/comment';
import { getOneComment } from 'src/app/models/comment';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html'
})
export class ShowPostComponent implements OnInit {

  allMessages: getAllMessages;
  oneMessage: getOneMessage;
  oneComment: getOneComment;
  allComments: getAllComments;
  liked: boolean;
  public profil: any;
  user: User;
  idMESSAGES: string;

  constructor(private postService : PostService,
              private formBuilder: FormBuilder,
              private commentService: CommentService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProfil();
    this.getAllMessages();
    this.getAllComments();
  }

  getAllMessages(){
    this.postService.getAllMessages().subscribe(response => {
      this.allMessages = response,
      console.log(this.allMessages);
    })
  }

  getOneMessages(id: string){
    this.postService.getOneMessage(id).subscribe(response => {
      this.oneMessage = response;
      console.log(this.oneMessage);
    })
  }

  getOneComment(id: string){
    this.commentService.getOneComment(id).subscribe(response => {
      this.oneComment = response;
      console.log(this.oneComment);
    })
  }

  getAllComments(){
    this.commentService.getAllComments().subscribe(response => {
      this.allComments = response,
      console.log(this.allComments);
    })
  }

  getProfil(){
    this.userService.getOneProfil().subscribe(response => {
    this.profil = response,
    console.log(this.profil)}) 
  }

  onComment(id: string) {
    this.getOneMessages(id);
    this.router.navigate(['addCommentComponent', id]);
  }

  onModifyMessage(id: string){
    this.getOneMessages(id);
    this.router.navigate(['modifyPostComponent', id]);
  }

  onDeleteMessage(id: string){
    this.getOneMessages(id);
    this.router.navigate(['deletePostComponent', id]);
  }

  onModifyComment(id: string){
    this.getOneComment(id);
    this.router.navigate(['modifyCommentComponent', id]);

  }

  onDeleteComment(id: string){
    this.getOneComment(id);
    this.router.navigate(['deleteCommentComponent', id]);
  }


}
