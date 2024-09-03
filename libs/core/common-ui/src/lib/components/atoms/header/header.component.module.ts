import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common'
import { NgModule } from '@angular/core'

import { AppIconsModule } from '../../../app-icons/app-icons.module'
import { HeaderComponent } from './header.component'

@NgModule({
	imports: [CommonModule, AppIconsModule, AsyncPipe, CurrencyPipe],
	exports: [HeaderComponent],
	declarations: [HeaderComponent]
})
export class HeaderComponentModule {}
