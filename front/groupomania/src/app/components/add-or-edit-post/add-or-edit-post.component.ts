import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-or-edit-post',
  templateUrl: './add-or-edit-post.component.html',
  styleUrls: ['./add-or-edit-post.component.scss']
})
export class AddOrEditPostComponent implements OnInit {

  createPost: FormGroup;
  responseServer = null;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) {}

  ngOnInit(): void {
    this.createPost = this.formBuilder.group({
      content: this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      attachment: this.formBuilder.control('')
    })
  }

  onSubmit(): void {
    const formPost = {
      content: this.createPost.get('content').value,
      attachment: this.createPost.get('attachment').value
    }
    this.postService.createMessage(formPost).subscribe(
      result =>
        sessionStorage[`session`] = JSON.stringify(result),
        this.router.navigate['addOrEditComponent']),
        error =>
          this.responseServer = error.error.message
    }

}
