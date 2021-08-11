import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html'
})
export class DeleteProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onDeleteProfil() {
    this.userService.deleteProfil().subscribe()
    sessionStorage.clear()
  }

}
