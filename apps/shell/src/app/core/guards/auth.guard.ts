import { Router } from '@angular/router'
import { AuthState } from '@ng-shop-workspace/auth-state'

import { inject } from '@angular/core'
import { Store } from '@ngxs/store'

export function authGuard() {
  const router = inject(Router)
  // TODO: why this not work? const authFacadeService = inject(AuthFacade)
  const store = inject(Store)

  const isAuthenticated = store.selectSnapshot(AuthState.isAuthenticated)
  if (isAuthenticated) return true

  router.navigate(['/auth'])
  return false
}
