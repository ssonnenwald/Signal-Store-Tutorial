import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layouts/main-layout/main-layout').then((m) => m.MainLayout),
    children: [
      { path: '', loadComponent: () => import('./features/home/home').then((m) => m.Home) },
      {
        path: 'counter',
        loadComponent: () => import('./features/counter/counter').then((m) => m.Counter),
      },
      { path: 'todos', loadComponent: () => import('./features/todos/todos').then((m) => m.Todos) },
      { path: 'users', loadComponent: () => import('./features/users/users').then((m) => m.Users) },
      { path: '**', redirectTo: '' }, // catch-all back to home
    ],
  },
];
