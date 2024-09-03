import { NgModule } from '@angular/core'

import { CurrencyPipe } from '@angular/common'
import { FeatherModule } from 'angular-feather'
import { ProductItemComponent } from './product-item/product-item.component'

const components = [ProductItemComponent]

@NgModule({
	imports: [FeatherModule, CurrencyPipe],
	declarations: components,
	exports: components
})
export class DashboardComponentsModule {}
