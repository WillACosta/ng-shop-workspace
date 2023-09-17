import { Component, OnInit } from '@angular/core'

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'ng-shop-workspace-login-view',
  templateUrl: 'login-view.component.html'
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup<{
    email: FormControl<string | null>
    password: FormControl<string | null>
  }>

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this._buildForm()
  }

  onClickSignIn() {
    if (!this.loginForm.valid) {
      return this.loginForm.markAllAsTouched()
    }

    const { email, password } = this.loginForm.value
    console.log({ email, password })
  }

  onClickForgottenPassword() {
    // TODO:
  }

  private _buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })
  }
}
