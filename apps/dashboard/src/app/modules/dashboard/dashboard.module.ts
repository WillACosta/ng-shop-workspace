import { AsyncPipe, CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import {
	AppIconsModule,
	HeaderComponentModule
} from '@ng-shop-workspace/common-ui'

import {
	LibsShopStateModule,
	ProductFacade,
	ShopFacade
} from '@ng-shop-workspace/shop-state'

import { DashboardComponentsModule } from 'src/app/components/components.module'
import { ListHeaderViewComponent } from './views/list-header/list-header-view.component'
import { PlantListViewComponent } from './views/plant-list/plant-list-view.component'

@NgModule({
	declarations: [ListHeaderViewComponent, PlantListViewComponent],
	imports: [
		AsyncPipe,
		CommonModule,
		AppIconsModule,
		HeaderComponentModule,
		DashboardComponentsModule,
		LibsShopStateModule.configure(),
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
		])
	],
	providers: [ShopFacade, ProductFacade],
	exports: [ListHeaderViewComponent]
})
export class DashboardModule {}
