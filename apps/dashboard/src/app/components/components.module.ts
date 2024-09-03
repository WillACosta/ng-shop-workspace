import { CommonModule, CurrencyPipe } from '@angular/common'
import { NgModule } from '@angular/core'

import { AppIconsModule } from '@ng-shop-workspace/common-ui'
import { ProductItemShimmerComponent } from './product-item-shimmer/product-item-shimmer.component'
import { ProductItemComponent } from './product-item/product-item.component'

const components = [ProductItemComponent, ProductItemShimmerComponent]

@NgModule({
	imports: [AppIconsModule, CurrencyPipe, CommonModule],
	declarations: [...components],
	exports: [...components]
})
export class DashboardComponentsModule {}
