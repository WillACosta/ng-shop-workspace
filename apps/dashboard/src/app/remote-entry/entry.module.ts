import { CommonModule, CurrencyPipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { remoteRoutes } from './entry.routes'

@NgModule({
	imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
	providers: [CurrencyPipe]
})
export class RemoteEntryModule {}
