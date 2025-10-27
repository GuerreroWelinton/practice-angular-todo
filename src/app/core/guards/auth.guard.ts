import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';

import { AuthService } from '@core/services/api/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const authService = inject(AuthService);
  const isAuthenticated = authService.user() !== null;

  if (!isAuthenticated) {
    return new RedirectCommand(router.parseUrl('/auth/register'));
  }

  return true;
};
