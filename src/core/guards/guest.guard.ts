import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/api/auth.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const authService = inject(AuthService);
  const isAuthenticated = authService.user() !== null;

  if (isAuthenticated) {
    return router.parseUrl('/todo/dashboard');
  }

  return true;
};
