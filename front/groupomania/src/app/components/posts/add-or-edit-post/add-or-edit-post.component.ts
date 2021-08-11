import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-or-edit-post',
  templateUrl: './add-or-edit-post.component.html'
})
export class AddOrEditPostComponent implements OnInit {

  createPost: FormGroup;
  responseServer = null;
  imagePreview: string;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) {}

  ngOnInit(): void {
    this.createPost = this.formBuilder.group({
      content: this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      attachment: this.formBuilder.control('')
    })
  }

  // Création d'un post
  onSubmit(): void {
      let content = this.createPost.get('content').value;
      let attachment = this.createPost.get('attachment').value;
    this.postService.createMessage(content, attachment).subscribe(
      result =>
        sessionStorage[`session`] = JSON.stringify(result),
        error =>
          this.responseServer = error.error.message
    )
}

onFileAdded(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.createPost.get('image').setValue(file);
  this.createPost.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result as string;
  };
  reader.readAsDataURL(file);
}

}
