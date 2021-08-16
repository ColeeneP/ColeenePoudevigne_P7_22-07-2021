import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ModifyProfileComponent } from './components/profile/modify-profile/modify-profile.component';
import { ShowProfileComponent } from './components/profile/show-profile/show-profile.component';
import { ShowPostComponent } from './components/posts/show-post/show-post.component';
import { DeletePostComponent } from './components/posts/delete-post/delete-post.component';
import { DeleteCommentComponent } from './components/comments/delete-comment/delete-comment.component';
import { AddCommentComponent } from './components/comments/add-comment/add-comment.component';
import { ModifyCommentComponent } from './components/comments/modify-comment/modify-comment.component';
import { ModifyPostComponent } from './components/posts/modify-post/modify-post.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'loginComponent', component: LoginComponent},
  {path: 'registerComponent', component: RegisterComponent},
  {path: 'showProfileComponent', component: ShowProfileComponent, canActivate: [AuthGuard] },
  {path: 'addPostComponent', component: AddPostComponent, canActivate: [AuthGuard]},
  {path: 'modifyProfileComponent', component: ModifyProfileComponent, canActivate: [AuthGuard]},
  {path: 'showPostComponent', component: ShowPostComponent, canActivate: [AuthGuard]},
  {path: 'addCommentComponent/:id', component: AddCommentComponent, canActivate: [AuthGuard]},
  {path: 'deletePostComponent/:id', component: DeletePostComponent, canActivate: [AuthGuard]},
  {path: 'deleteCommentComponent/:id', component: DeleteCommentComponent, canActivate: [AuthGuard]},
  {path: 'modifyPostComponent/:id', component: ModifyPostComponent, canActivate: [AuthGuard]},
  {path: 'modifyCommentComponent/:id', component: ModifyCommentComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
