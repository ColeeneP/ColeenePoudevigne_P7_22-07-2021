import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html'
})
export class ShowProfileComponent implements OnInit {

  public profil: any;
  user: User;
  defautPicture: 'https://www.w3schools.com/howto/img_avatar.png';
  url: '';
  session = JSON.parse(sessionStorage.getItem('session'));

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProfil()
  }
  
  getProfil(){
      this.userService.getProfil().subscribe(response => {
      this.profil = response,
      console.log(this.profil)}) 
  }

}
