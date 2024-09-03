import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { Inject, Injectable } from '@angular/core'
import { catchError, retry, throwError } from 'rxjs'

import { AUTH_STATE_OPTIONS, AuthStateOptions } from '../../core/injection'

import { UserModel } from '../../core'
import { SignInModel } from '../../core/types'

@Injectable()
export class AuthService {
	constructor(
		private readonly _httpClient: HttpClient,
		@Inject(AUTH_STATE_OPTIONS) private options: AuthStateOptions
	) {}

	signIn(payload: SignInModel) {
		return this._httpClient.post<UserModel>(this.options.apiUrl, payload).pipe(
			retry(2),
			catchError((err) => this._handleError(err))
		)
	}

	private _handleError(error: HttpErrorResponse) {
		let errorMessage = ''

		if (error.error instanceof ErrorEvent) {
			errorMessage = error.error.message
		} else {
			errorMessage = `${error.status} : ${
				error.message
			} - ${error.error.toString()}`
		}

		return throwError(() => errorMessage)
	}
}
