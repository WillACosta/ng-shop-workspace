import { Component, OnInit, isDevMode } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { Actions, ofActionErrored, ofActionSuccessful } from '@ngxs/store'
import { tap } from 'rxjs'

import { resolveAppImagePath } from '@core/functions'
import { ViewUiState } from '../../../core/constants/view-ui-state'

import {
  AuthFacade,
  SignInAction,
  SignInPayload
} from '@ng-shop-workspace/auth-state'

import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'ng-shop-workspace-login-view',
  templateUrl: 'login-view.component.html'
})
export class LoginViewComponent implements OnInit {
  viewUiState = ViewUiState.idle
  viewUiStateType = ViewUiState
  welcomeImagePath = resolveAppImagePath('welcome')

  loginForm: FormGroup<{
    email: FormControl<string | null>
    password: FormControl<string | null>
  }>

  constructor(
    private readonly fb: FormBuilder,
    private authFacade: AuthFacade,
    private action: Actions,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this._buildForm()
    this._setListeners()
  }

  private _setListeners() {
    this.action
      .pipe(
        ofActionSuccessful(SignInAction),
        tap(() => (this.viewUiState = ViewUiState.success))
      )
      .subscribe(() => {
        console.info('navigated to home')
        this.router.navigate(['/'])
      })

    this.action
      .pipe(
        ofActionErrored(SignInAction),
        tap(() => (this.viewUiState = ViewUiState.success))
      )
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

    this.viewUiState = ViewUiState.loading
    this.authFacade.signIn(this.loginForm.value as SignInPayload)
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
