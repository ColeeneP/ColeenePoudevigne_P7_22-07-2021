import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html'
})
export class AddPostComponent implements OnInit {

  createPost: FormGroup;
  responseServer = null;
  imagePreview: string;
  public profil: any;
  user: User;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.getProfil()
    this.createPost = this.formBuilder.group({
      content: this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      attachment: this.formBuilder.control('')
    })
  }

  // Création d'un post
  onSubmit(): void {
      let content = this.createPost.get('content').value;
      let attachment = this.createPost.get('attachment').value;
      console.log(attachment)
    this.postService.createMessage(content, attachment).subscribe(
      result =>
        sessionStorage['message'] = JSON.stringify(result),
        error =>
          this.responseServer = error.error.message
    )
    this.router.navigate(['showPostComponent'])
}

onFileAdded(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.createPost.get('attachment').setValue(file);
  this.createPost.updateValueAndValidity();
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

}
