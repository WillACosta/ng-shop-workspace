import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginViewComponent } from './views';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginViewComponent,
      },
    ]),
  ],
  declarations: [LoginViewComponent],
})
export class LoginViewModule {}
