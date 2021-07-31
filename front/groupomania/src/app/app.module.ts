import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DeletePostComponent } from './components/delete-post/delete-post.component';
import { AddOrEditPostComponent } from './components/add-or-edit-post/add-or-edit-post.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowProfileComponent } from './components/show-profile/show-profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/header/header.component';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
