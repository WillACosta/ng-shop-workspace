import { SignInPayload } from '../../core/types'

export class SignInAction {
  static readonly type = '[Auth] Sign-in user'
  constructor(public payload: SignInPayload) {}
}

export class SignOutAction {
  static readonly type = '[Auth] Sign-out user'
}
