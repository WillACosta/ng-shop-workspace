import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import {
	HeaderComponentModule,
	IconsModule
} from '@ng-shop-workspace/common-ui'

import { LibsShopStateModule, ShopFacade } from '@ng-shop-workspace/shop-state'

import { RecommendationListViewComponent } from '../recommendation/views'
import { CheckoutItemComponent, CheckoutProductsViewComponent } from './view'

@NgModule({
	declarations: [CheckoutProductsViewComponent, CheckoutItemComponent],
	imports: [
		CommonModule,
		IconsModule,
		HeaderComponentModule,
		RecommendationListViewComponent,
		LibsShopStateModule.forRoot(),
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
