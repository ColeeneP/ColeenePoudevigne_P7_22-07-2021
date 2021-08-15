import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { createComment } from 'src/app/models/comment';
import { getOneComment } from 'src/app/models/comment';

@Component({
  selector: 'app-modify-comment',
  templateUrl: './modify-comment.component.html'
})
export class ModifyCommentComponent implements OnInit {
  modifyComment: FormGroup;
  responseServer = null;
  comment: createComment;
  imagePreview: string;
  public profil: any;
  user: User;
  idComment = window.location.href.split('modifyCommentComponent/')[1];
  public oneComment: {content: [object]};

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private commentService: CommentService,
              private postService: PostService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.getProfil(),
    this.getOneComment(this.idComment),
    this.route.params.subscribe(params => 
      this.commentService.getOneComment(params.id).subscribe(post =>
        this.modifyForm(),
        this.onSubmit))
    this.modifyComment = this.formBuilder.group({
      content: this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      attachment: this.formBuilder.control('')
    })
  }

  modifyForm() {
    this.modifyComment = this.formBuilder.group({
      content: [this.comment.content, Validators.required, Validators.minLength(10), Validators.maxLength(255)],
      attachment: [this.comment.attachment]})
      console.log(this.comment);
  }

  // Création d'un commentaire
  onSubmit(): void {
      let idComment = window.location.href.split('modifyCommentComponent/')[1];
      let content = this.modifyComment.get('content').value;
      let attachment = this.modifyComment.get('attachment').value;
    this.commentService.modifyComment(idComment, content, attachment).subscribe(
      result =>
        console.log(result),
        error =>
          this.responseServer = error.error.message
    )
    this.router.navigate(['showPostComponent'])
}

onFileAdded(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.modifyComment.get('attachment').setValue(file);
  this.modifyComment.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result as string;
  };
  reader.readAsDataURL(file);
}

getProfil(){
  this.userService.getOneProfil().subscribe(response => {
  this.profil = response,
  console.log(this.profil)}) 
}

getOneComment(id: string){
  this.commentService.getOneComment(id).subscribe(response => {
    this.oneComment = response;
    console.log(this.oneComment);
  })
}
}
