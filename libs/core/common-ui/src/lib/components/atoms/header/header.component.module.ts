import { NgModule } from '@angular/core'

import { AsyncPipe, CommonModule } from '@angular/common'
import { IconsModule } from '../../../feather-icons/feather-icons.module'
import { HeaderComponent } from './header.component'

@NgModule({
	imports: [CommonModule, IconsModule, AsyncPipe],
	exports: [HeaderComponent],
	declarations: [HeaderComponent]
})
export class HeaderComponentModule {}
