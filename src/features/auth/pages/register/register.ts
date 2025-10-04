import { CommonModule } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '@core/services/api/auth.service';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'auth-register',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, MessageModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);

  isLoading = this.authService.isLoadingRegistration;

  formSubmitted = signal(false);

  registrationForm = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
  });

  registerUser() {
    this.formSubmitted.set(true);

    const { username } = this.registrationForm.value;

    if (this.registrationForm.invalid || !username) {
      return;
    }

    this.authService.registerUser({ username });
    this.formSubmitted.set(false);
  }
}
