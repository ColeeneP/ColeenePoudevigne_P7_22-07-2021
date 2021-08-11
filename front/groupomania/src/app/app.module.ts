import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DeletePostComponent } from './components/posts/delete-post/delete-post.component';
import { AddOrEditPostComponent } from './components/posts/add-or-edit-post/add-or-edit-post.component';
import { ShowPostComponent } from './components/posts/show-post/show-post.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowProfileComponent } from './components/profile/show-profile/show-profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ModifyProfileComponent } from './components/profile/modify-profile/modify-profile.component';
import { LikePostComponent } from './components/posts/like-post/like-post.component';
import { LikeCommentComponent } from './components/comments/like-comment/like-comment.component';
import { AddOrEditCommentComponent } from './components/comments/add-or-edit-comment/add-or-edit-comment.component';
import { DeleteCommentComponent } from './components/comments/delete-comment/delete-comment.component';
import { DeleteProfileComponent } from './components/profile/delete-profile/delete-profile.component';
import { AuthInterceptor } from './auth-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeletePostComponent,
    AddOrEditPostComponent,
    ShowPostComponent,
    ShowProfileComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ModifyProfileComponent,
    LikePostComponent,
    LikeCommentComponent,
    AddOrEditCommentComponent,
    DeleteCommentComponent,
    DeleteProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
