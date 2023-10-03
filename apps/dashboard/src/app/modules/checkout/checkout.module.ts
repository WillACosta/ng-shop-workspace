import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import {
	HeaderComponentModule,
	IconsModule
} from '@ng-shop-workspace/common-ui'

import { LibsShopStateModule, ShopFacade } from '@ng-shop-workspace/shop-state'

import { RouterModule } from '@angular/router'
import { moduleRoutes } from './checkout.module.routes'
import { CheckoutProductsViewComponent } from './view'
import { CheckoutItemComponent } from './view/components/checkout-item.component'

@NgModule({
	declarations: [CheckoutProductsViewComponent, CheckoutItemComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(moduleRoutes),
		LibsShopStateModule.forRoot(),
		IconsModule,
		HeaderComponentModule
	],
	providers: [ShopFacade]
})
export class CheckoutModule {}
