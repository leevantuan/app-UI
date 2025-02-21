import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  newsletter = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
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
    });
  }

  get firstNameInvalid() {
    return (
      this.registerForm.get('firstName')?.invalid &&
      this.registerForm.get('firstName')?.touched
    );
  }

  get lastNameInvalid() {
    return (
      this.registerForm.get('lastName')?.invalid &&
      this.registerForm.get('lastName')?.touched
    );
  }

  get emailInvalid() {
    return (
      this.registerForm.get('email')?.invalid &&
      this.registerForm.get('email')?.touched
    );
  }

  get passwordInvalid() {
    return (
      this.registerForm.get('password')?.invalid &&
      this.registerForm.get('password')?.touched
    );
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log('Form submitted successfully!', this.registerForm.value);
  }
}
