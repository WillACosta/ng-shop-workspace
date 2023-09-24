import { Component, OnInit, isDevMode } from '@angular/core'

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthFacade, SignInAction } from '@ng-shop-workspace/shared/auth-state'
import { Actions, ofActionErrored, ofActionSuccessful } from '@ngxs/store'
import { tap } from 'rxjs'
import { SignInPayload } from 'shared/auth-state/src/lib/core/types'
import { ViewUiState } from './constants/view-ui-state'

@Component({
  selector: 'ng-shop-workspace-login-view',
  templateUrl: 'login-view.component.html'
})
export class LoginViewComponent implements OnInit {
  viewUiState = ViewUiState.idle
  viewUiStateType = ViewUiState

  loginForm: FormGroup<{
    email: FormControl<string | null>
    password: FormControl<string | null>
  }>

  constructor(
    private readonly fb: FormBuilder,
    private authFacade: AuthFacade,
    private action: Actions
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
        // TODO: redirect to base route
        console.log('logged in')
      })

      this.action
      .pipe(
        ofActionErrored(SignInAction),
        tap(() => (this.viewUiState = ViewUiState.success))
      )
      .subscribe(() => {
        // TODO: handle error
        console.log('error')
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
