import { Routes } from '@angular/router';

import { authGuard } from '@core/guards/auth.guard';
import { guestGuard } from '@core/guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/task/dashboard',
  },
  {
    path: 'task',
    canActivate: [authGuard],
    loadComponent: () =>
      import('../shared/layouts/content-layout/content-layout').then((m) => m.ContentLayout),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../features/tasks/pages/task-dashboard/task-dashboard').then(
            (m) => m.TaskDashboard,
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
