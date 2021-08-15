import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { getOneMessage } from 'src/app/models/post';
import { getOneComment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
})
export class DeletePostComponent implements OnInit {

  idMessage = window.location.href.split('deletePostComponent/')[1];
  oneMessage: getOneMessage;
  oneComment: getOneComment;

  constructor(private postService: PostService,
              private commentService: CommentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.postService.getOneMessage(params.id).subscribe(post =>
        this.onDeletePost))
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

  onDeletePost(id: string) {
    console.log(id);
    this.postService.deleteMessage(id).subscribe()
    this.router.navigate(['showPostComponent'])
  }

}
