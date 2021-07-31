import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditPostComponent } from './components/add-or-edit-post/add-or-edit-post.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  {path: 'loginComponent', component: LoginComponent},
  {path: 'registerComponent', component: RegisterComponent},
  {path: 'addOrEditComponent', component: AddOrEditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
