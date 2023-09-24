import { Injectable } from '@angular/core'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'
import { SignInPayload } from '../../core/types'
import { AuthState, SignInAction, SignOutAction } from '../../store'

interface IAuthFacade {
  isAuthenticated$: Observable<boolean>
  signIn(payload: SignInPayload): void
  signOut(): void
}

@Injectable()
export class AuthFacade implements IAuthFacade {
  constructor(private _store: Store) {}

  @Select(AuthState.isAuthenticated)
  isAuthenticated$: Observable<boolean>

  isAuthenticated = this._store.selectSnapshot(AuthState.isAuthenticated)

  signIn(payload: SignInPayload): void {
    const action = new SignInAction(payload)
    this._store.dispatch(action)
  }

  signOut(): void {
    this._store.dispatch(new SignOutAction())
  }
}
