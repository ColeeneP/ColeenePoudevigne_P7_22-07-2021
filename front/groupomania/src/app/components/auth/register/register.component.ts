import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      firstname: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.pattern('"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"')]) // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    })
  }

  onRegister(): void {
  const formOnRegister = {
    name: this.registerForm.get('name').value,
    firstname: this.registerForm.get('firstname').value,
    email: this.registerForm.get('email').value,
    password: this.registerForm.get('password').value
  }
  console.log(formOnRegister);
};
  
}
