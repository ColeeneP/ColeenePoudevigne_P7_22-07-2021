import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { RegisterComponent } from '../../auth/register/register.component';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html'
})
export class DeleteProfileComponent implements OnInit {

  id = window.location.href.split('showProfileComponent/')[1];

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onDeleteProfil(id: string) {
    this.userService.deleteProfil(id).subscribe()
    sessionStorage.clear()
    this.router.navigate(['registerComponent'])
  }

}
