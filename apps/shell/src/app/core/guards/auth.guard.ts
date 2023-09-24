import { Router } from '@angular/router'
import { AuthFacade } from '@ng-shop-workspace/shared/auth-state'

import { inject } from '@angular/core'

export function authGuard() {
  const router = inject(Router)
  const authFacadeService = inject(AuthFacade)

  if (authFacadeService.isAuthenticated) return true

  router.navigate(['/auth'])
  return false
}
