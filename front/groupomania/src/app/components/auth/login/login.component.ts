import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  authUser: boolean;
  responseServer = null;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.pattern('"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"')]) // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    })
  }

  onLogin(): void {
    const formOnLogin = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
    this.userService.logUser(formOnLogin).subscribe(
      result =>
        sessionStorage[`session`] = JSON.stringify(result),
        this.router.navigate['addOrEditComponent']),
        error =>
          this.responseServer = error.error.message
    }
  };
