import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LibsShopStateModule, ShopFacade } from '@ng-shop-workspace/shop-state'

import { RouterModule } from '@angular/router'
import { moduleRoutes } from './checkout.module.routes'
import { CheckoutProductsViewComponent } from './views'

@NgModule({
	declarations: [CheckoutProductsViewComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(moduleRoutes),
		LibsShopStateModule.forRoot()
	],
	providers: [ShopFacade]
})
export class CheckoutModule {}
