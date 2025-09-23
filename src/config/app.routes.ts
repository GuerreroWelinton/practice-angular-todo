import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos',
  },
  {
    path: '',
    loadComponent: () =>
      import('../shared/layouts/content-layout/content-layout').then((m) => m.ContentLayout),
    children: [
      {
        path: 'todos',
        loadComponent: () =>
          import('../features/todo/pages/todo-dashboard/todo-dashboard').then(
            (m) => m.TodoDashboard
          ),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('../shared/layouts/full-layout/full-layout').then((m) => m.FullLayout),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadComponent: () => import('../features/auth/pages/login/login').then((m) => m.Login),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../features/auth/pages/register/register').then((m) => m.Register),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'todos',
  },
];
