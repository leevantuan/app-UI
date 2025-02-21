import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  newsletter = false;
  rememberMe = true;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
      newsletter: [false],
      rememberMe: [true],
    });
  }

  get emailInvalid() {
    return (
      this.loginForm.get('email')?.invalid &&
      this.loginForm.get('email')?.touched
    );
  }

  get passwordInvalid() {
    return (
      this.loginForm.get('password')?.invalid &&
      this.loginForm.get('password')?.touched
    );
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log('Form submitted successfully!', this.loginForm.value);
  }
}
