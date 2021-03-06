import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html'
})
export class AddCommentComponent implements OnInit {

  createComment: FormGroup;
  responseServer = null;
  imagePreview: string;
  public profil: any;
  user: User;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private commentService: CommentService,
              private postService: PostService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.getProfil()
    this.route.params.subscribe(params => 
      this.postService.getOneMessage(params.id).subscribe(post =>
        this.onSubmit))
    this.createComment = this.formBuilder.group({
      content: this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      attachment: this.formBuilder.control('')
    })
  }

  // Création d'un commentaire
  onSubmit(): void {
      let idMessage = window.location.href.split('addCommentComponent/')[1];
      console.log(idMessage);
      let content = this.createComment.get('content').value;
    this.commentService.createComment(idMessage, content).subscribe(
      result =>
      localStorage['comment'] = JSON.stringify(result),
        error =>
          this.responseServer = error.error.message
    )
    this.router.navigate(['showPostComponent'])
}

getProfil(){
  this.userService.getProfil().subscribe(response => {
  this.profil = response,
  console.log(this.profil)}) 
}

}
