import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditPostComponent } from './components/posts/add-or-edit-post/add-or-edit-post.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ModifyProfileComponent } from './components/profile/modify-profile/modify-profile.component';
import { ShowProfileComponent } from './components/profile/show-profile/show-profile.component';

const routes: Routes = [
  {path: 'loginComponent', component: LoginComponent},
  {path: 'registerComponent', component: RegisterComponent},
  {path: 'showProfileComponent', component: ShowProfileComponent},
  {path: 'addOrEditComponent', component: AddOrEditPostComponent},
  {path: 'modifyProfileComponent', component: ModifyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
