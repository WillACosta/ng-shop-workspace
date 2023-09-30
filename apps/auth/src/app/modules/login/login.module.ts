import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AuthState, SharedAuthStateModule } from '@ng-shop-workspace/auth-state'
import { NgxsModule } from '@ngxs/store'
import { environment } from '../../../environments/environment'
import { LoginViewComponent } from './views'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginViewComponent
      }
    ]),
    NgxsModule.forFeature([AuthState]),
    SharedAuthStateModule.forRoot(environment.authApiUrl)
  ],
  declarations: [LoginViewComponent]
})
export class LoginViewModule {}
