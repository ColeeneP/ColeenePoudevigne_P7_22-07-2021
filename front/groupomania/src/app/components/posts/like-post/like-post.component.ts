import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { createMessage } from 'src/app/models/post'

@Component({
  selector: 'app-like-post',
  templateUrl: './like-post.component.html'
})
export class LikePostComponent implements OnInit {

  post: createMessage;
  liked: boolean;
  likePending: boolean;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  // onLike() {
  //   this.likePending = true;
  //   this.postService.likePost(this.post._id, !this.liked).then(
  //     (liked: boolean) => {
  //       this.likePending = false;
  //       this.liked = liked;
  //       if (liked) {
  //         this.post.likes++;
  //       } else {
  //         this.post.likes--;
  //       }
  //     }
  //   );
  // }
}
