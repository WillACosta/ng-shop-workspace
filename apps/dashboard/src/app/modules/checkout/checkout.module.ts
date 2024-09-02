import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import {
	HeaderComponentModule,
	IconsModule
} from '@ng-shop-workspace/common-ui'

import { RecommendationModule } from '@modules/recommendation/recommendation.module'
import { LibsShopStateModule, ShopFacade } from '@ng-shop-workspace/shop-state'
import { CheckoutItemComponent, CheckoutProductsViewComponent } from './view'

@NgModule({
	declarations: [CheckoutProductsViewComponent, CheckoutItemComponent],
	imports: [
		CommonModule,
		IconsModule,
		HeaderComponentModule,
		RecommendationModule,
		LibsShopStateModule.configure(),
		RouterModule.forChild([
			{
				path: '',
				component: CheckoutProductsViewComponent
			}
		])
	],
	providers: [ShopFacade]
})
export class CheckoutModule {}
