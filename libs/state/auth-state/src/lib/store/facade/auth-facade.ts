import { Injectable } from '@angular/core'

import {
	Actions,
	Select,
	Store,
	ofActionErrored,
	ofActionSuccessful
} from '@ngxs/store'

import { Observable } from 'rxjs'

import { SignInPayload } from '../../core/types'
import { SignInAction, SignOutAction } from '../actions/auth.actions'
import { AuthState } from '../state/auth.state'

interface IAuthFacade {
	isAuthenticated$: Observable<boolean>
	signIn(payload: SignInPayload): void
	signOut(): void
}

@Injectable()
export class AuthFacade implements IAuthFacade {
	constructor(private _store: Store, private _actions: Actions) {}

	ofSignInSuccess$ = this._actions.pipe(ofActionSuccessful(SignInAction))
	ofSignInErrored$ = this._actions.pipe(ofActionErrored(SignInAction))

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
