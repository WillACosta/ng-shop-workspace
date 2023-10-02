// The injection token is used to resolve to options provided at the root

export interface AuthStateOptions {
  apiUrl: string
}

import { InjectionToken } from '@angular/core'

export const AUTH_STATE_OPTIONS = new InjectionToken<AuthStateOptions>(
  'auth.state.options'
)
