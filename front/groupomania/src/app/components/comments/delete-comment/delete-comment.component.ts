import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { getOneMessage } from 'src/app/models/post';
import { getOneComment } from 'src/app/models/comment';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html'
})
export class DeleteCommentComponent implements OnInit {

  idComment = window.location.href.split('deleteCommentComponent/')[1];
  oneMessage: getOneMessage;
  oneComment: getOneComment;

  constructor(private commentService: CommentService,
              private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  this.route.params.subscribe(params => 
    this.commentService.getOneComment(params.id).subscribe(post =>
      this.onDeleteComment))
  }

  getOneMessages(id: string){
    this.postService.getOneMessage(id).subscribe(response => {
      this.oneMessage = response;
    })
  }

  getOneComment(id: string){
    this.commentService.getOneComment(id).subscribe(response => {
      this.oneComment = response;
    })
  }

  onDeleteComment(id: string) {
    console.log(id);
    this.commentService.deleteComment(id).subscribe(),
    this.router.navigate(['showPostComponent'])
  }

}
