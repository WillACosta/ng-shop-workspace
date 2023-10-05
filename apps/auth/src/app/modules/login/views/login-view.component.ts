import { resolveAppImagePath } from '@ng-shop-workspace/core-common'

/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Component, OnInit, isDevMode } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { ToastrService } from 'ngx-toastr'
import { tap } from 'rxjs'

import { environment } from '@environment'
import { AuthFacade } from '@ng-shop-workspace/auth-state'
import { ViewUiState } from '../../../core/constants/view-ui-state'

@Component({
	selector: 'ng-shop-workspace-login-view',
	templateUrl: 'login-view.component.html'
})
export class LoginViewComponent implements OnInit {
	viewUiState = ViewUiState.idle
	viewUiStateType = ViewUiState
	welcomeImagePath = resolveAppImagePath({
		baseUrl: environment.baseUrl,
		resourceName: 'welcome'
	})

	loginForm: FormGroup<{
		email: FormControl<string | null>
		password: FormControl<string | null>
	}>

	constructor(
		private readonly fb: FormBuilder,
		private authFacade: AuthFacade,
		private router: Router,
		private toastrService: ToastrService
	) {}

	ngOnInit() {
		this._buildForm()
		this._setListeners()
	}

	private _setListeners() {
		this.authFacade.ofSignInSuccess$
			.pipe(tap(() => (this.viewUiState = ViewUiState.success)))
			.subscribe(() => {
				console.info('navigated to home')
				this.router.navigate(['/'])
			})

		this.authFacade.ofSignInErrored$
			.pipe(tap(() => (this.viewUiState = ViewUiState.success)))
			.subscribe(() => {
				this.toastrService.warning(
					'Usuário ou senha inválida',
					'Oops! Encontramos um erro inesperado.'
				)
			})
	}

	onClickSignIn() {
		if (!this.loginForm.valid) {
			return this.loginForm.markAllAsTouched()
		}

		const { email, password } = this.loginForm.value

		this.viewUiState = ViewUiState.loading
		this.authFacade.signIn({ email: email!, password: password! })
	}

	onClickForgottenPassword() {
		// TODO:
	}

	private _buildForm() {
		const defaultEmailValue = isDevMode() ? 'eve.holt@reqres.in' : ''
		const passwordDefaultValue = isDevMode() ? 'cityslicka' : ''

		this.loginForm = this.fb.group({
			email: [
				defaultEmailValue,
				Validators.compose([Validators.email, Validators.required])
			],
			password: [passwordDefaultValue, Validators.required]
		})
	}
}
