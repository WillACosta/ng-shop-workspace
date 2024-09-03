import { CurrencyPipe } from '@angular/common'
import { NgModule } from '@angular/core'

import { AppIconsModule } from '@ng-shop-workspace/common-ui'
import { ProductItemComponent } from './product-item/product-item.component'

const components = [ProductItemComponent]

@NgModule({
	imports: [AppIconsModule, CurrencyPipe],
	declarations: components,
	exports: components
})
export class DashboardComponentsModule {}
