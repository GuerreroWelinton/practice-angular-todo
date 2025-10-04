import { Routes } from '@angular/router';

import { authGuard } from '@core/guards/auth.guard';
import { guestGuard } from '@core/guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/todo/dashboard',
  },
  {
    path: 'todo',
    canActivate: [authGuard],
    loadComponent: () =>
      import('../shared/layouts/content-layout/content-layout').then((m) => m.ContentLayout),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../features/todo/pages/todo-dashboard/todo-dashboard').then(
            (m) => m.TodoDashboard,
          ),
      },
    ],
  },
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('../shared/layouts/full-layout/full-layout').then((m) => m.FullLayout),
    children: [
      {
        path: 'register',
        loadComponent: () =>
          import('../features/auth/pages/register/register').then((m) => m.Register),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/todo/dashboard',
  },
];
