import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post';

@Component({
  selector: 'app-add-or-edit-post',
  templateUrl: './add-or-edit-post.component.html',
  styleUrls: ['./add-or-edit-post.component.scss']
})
export class AddOrEditPostComponent implements OnInit {

  @Input() post!: Post;
  postForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.postForm = formBuilder.group({
      contentPost: formBuilder.group({
        content: ['', Validators.required]
      }),
      attachmentPost: formBuilder.group({
        attachment: ['']
      })
    })
  }

  ngOnInit(): void {
  }

}
