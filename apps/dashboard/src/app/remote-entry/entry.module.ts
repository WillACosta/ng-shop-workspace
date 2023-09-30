import { CommonModule, CurrencyPipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HttpClientModule } from '@angular/common/http'
import { PlantService } from '@modules/dashboard/data'
import { remoteRoutes } from './entry.routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    HttpClientModule
  ],
  providers: [CurrencyPipe, PlantService]
})
export class RemoteEntryModule {}
