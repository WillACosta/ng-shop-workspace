import { Route } from '@angular/router'

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('../modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      )
  }
]
