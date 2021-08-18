import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { PostService } from 'src/app/services/post.service';
import { createMessage } from 'src/app/models/post';
import { getOneMessage } from 'src/app/models/post';

@Component({
  selector: 'app-modify-post',
  templateUrl: './modify-post.component.html'
})
export class ModifyPostComponent implements OnInit {
  modifyPost: FormGroup;
  responseServer = null;
  post: createMessage;
  imagePreview: string;
  public profil: any;
  user: User;
  idPost = window.location.href.split('modifyPostComponent/')[1];
  public onePost: {content: [object]};

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private commentService: CommentService,
              private postService: PostService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.getProfil(),
    this.getOneMessage(this.idPost),
    this.route.params.subscribe(params => 
      this.commentService.getOneComment(params.id).subscribe(post =>
        this.modifyForm(),
        this.onSubmit))
    this.modifyPost = this.formBuilder.group({
      attachment: this.formBuilder.control('')
    })
  }

  modifyForm() {
    this.modifyPost = this.formBuilder.group({
      attachment: [this.post.attachment]})
      console.log(this.post);
  }

  // Modification du post
  onSubmit(): void {
      let idPost = window.location.href.split('modifyPostComponent/')[1];
      let attachment = this.modifyPost.get('attachment').value;
    this.postService.modifyMessage(idPost, attachment).subscribe(
      result =>
        console.log(result),
        error =>
          this.responseServer = error.error.message
    )
    this.router.navigate(['showPostComponent'])
}

onFileAdded(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.modifyPost.get('attachment').setValue(file);
  this.modifyPost.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result as string;
  };
  reader.readAsDataURL(file);
}

getProfil(){
  this.userService.getProfil().subscribe(response => {
  this.profil = response,
  console.log(this.profil)}) 
}

getOneMessage(id: string){
  this.postService.getOneMessage(id).subscribe(response => {
    this.onePost = response;
    console.log(this.onePost);
  })
}
}
