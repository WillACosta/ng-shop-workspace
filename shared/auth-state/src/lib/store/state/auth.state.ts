import { Injectable } from '@angular/core'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { tap } from 'rxjs'

import { AuthService } from '../../services/auth/auth.service'
import { SignInAction } from '../actions/auth.actions'

export class AuthStateModel {
  token: string | null
  userName: string | null
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    userName: null
  }
})
@Injectable()
export class AuthState {
  constructor(private readonly _authService: AuthService) {}

  @Selector()
  static isAuthenticated(state: AuthStateModel) {
    return !!state?.token
  }

  @Selector()
  static token(state: AuthStateModel) {
    return state.token
  }

  @Action(SignInAction)
  signIn(
    { getState, setState }: StateContext<AuthStateModel>,
    { payload }: SignInAction
  ) {
    return this._authService.signIn(payload).pipe(
      tap((response) => {
        setState({
          ...getState(),
          token: response.token ?? '',
          userName: 'USER'
        })
      })
    )
  }

  signOut({ setState }: StateContext<AuthStateModel>): void {
    setState({
      token: null,
      userName: null
    })
  }
}
