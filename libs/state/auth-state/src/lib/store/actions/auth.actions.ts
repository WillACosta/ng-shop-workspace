import { SignInModel } from '../../core/types'

export class SignInAction {
	static readonly type = '[Auth] Sign-in user'
	constructor(public payload: SignInModel) {}
}

export class SignOutAction {
	static readonly type = '[Auth] Sign-out user'
}
