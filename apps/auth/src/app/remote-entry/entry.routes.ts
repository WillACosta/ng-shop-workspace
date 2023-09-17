import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('../modules/login/login.module').then((m) => m.LoginViewModule),
  },
];
