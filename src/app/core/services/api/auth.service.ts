import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../ui/alert.service';

import { User, UserRegistration } from '@core/interfaces/api/user.interface';

import { LOCAL_STORAGE_KEYS } from '@core/constants/local-storage.constant';
import { MESSAGES } from '@core/constants/messages.constant';

@Injectable({ providedIn: 'root' })
export class AuthService {
  #router = inject(Router);
  #alertService = inject(AlertService);

  #user = signal<User | null>(null);
  #isLoadingRegistration = signal(false);

  readonly user = this.#user.asReadonly();
  readonly isLoadingRegistration = this.#isLoadingRegistration.asReadonly();
  readonly username = computed(() => this.#user()?.username.toLowerCase() || '');

  loadUserSession() {
    const userData = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);
    if (userData) {
      const user: User = JSON.parse(userData);
      this.#user.set(user);

      setTimeout(() => {
        this.#alertService.showInfo({ message: MESSAGES.WELCOME_BACK(user.username) });
      }, 100);
    } else {
      this.#user.set(null);
    }
  }

  registerUser(userRegistration: UserRegistration) {
    this.#isLoadingRegistration.set(true);

    const id = new Date().getTime();
    const registeredAt = new Date();
    const user: User = { id, registeredAt, ...userRegistration };

    setTimeout(() => {
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(user));

      this.#user.set(user);
      this.#alertService.showSuccess({ message: MESSAGES.REGISTRATION_SUCCESS });
      this.#isLoadingRegistration.set(false);

      this.#router.navigate(['/todo/dashboard']);
    }, 1500);
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
    this.#user.set(null);
    this.#alertService.showInfo({ message: MESSAGES.LOGOUT_SUCCESS });
    this.#router.navigate(['/auth/register']);
  }
}
