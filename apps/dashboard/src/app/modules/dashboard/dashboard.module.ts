import { AsyncPipe, CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import {
	HeaderComponentModule,
	IconsModule
} from '@ng-shop-workspace/common-ui'

import {
	LibsShopStateModule,
	ProductFacade,
	ShopFacade
} from '@ng-shop-workspace/shop-state'

import { ListHeaderViewComponent } from './views/list-header/list-header-view.component'
import { PlantListViewComponent } from './views/plant-list/plant-list-view.component'

@NgModule({
	declarations: [ListHeaderViewComponent, PlantListViewComponent],
	imports: [
		AsyncPipe,
		CommonModule,
		IconsModule,
		RouterModule.forChild([
			{
				path: '',
				component: PlantListViewComponent
			},
			{
				path: 'checkout',
				loadChildren: () =>
					import('../../modules/checkout/checkout.module').then(
						(m) => m.CheckoutModule
					)
			}
		]),
		LibsShopStateModule.forRoot(),
		HeaderComponentModule
	],
	providers: [ShopFacade, ProductFacade],
	exports: [ListHeaderViewComponent]
})
export class DashboardModule {}
