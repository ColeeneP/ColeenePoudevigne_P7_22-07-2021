import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShowPostComponent } from './components/posts/show-post/show-post.component';
import { DeletePostComponent } from './components/posts/delete-post/delete-post.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowProfileComponent } from './components/profile/show-profile/show-profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ModifyProfileComponent } from './components/profile/modify-profile/modify-profile.component';
import { DeleteCommentComponent } from './components/comments/delete-comment/delete-comment.component';
import { DeleteProfileComponent } from './components/profile/delete-profile/delete-profile.component';
import { AuthInterceptor } from './auth-interceptor';
import { ModifyCommentComponent } from './components/comments/modify-comment/modify-comment.component';
import { AddCommentComponent } from './components/comments/add-comment/add-comment.component';
import { ModifyPostComponent } from './components/posts/modify-post/modify-post.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeletePostComponent,
    AddPostComponent,
    ShowPostComponent,
    ShowProfileComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ModifyProfileComponent,
    DeleteCommentComponent,
    DeleteProfileComponent,
    ModifyCommentComponent,
    AddCommentComponent,
    AddPostComponent,
    ModifyPostComponent,
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
