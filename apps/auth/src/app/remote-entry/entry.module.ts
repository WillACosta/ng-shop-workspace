import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ToastrModule, ToastrService } from 'ngx-toastr'
import { remoteRoutes } from './entry.routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    ToastrModule.forRoot({
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
      autoDismiss: true
    })
  ],
  providers: [
    ToastrService
  ]
})
export class RemoteEntryModule {}
