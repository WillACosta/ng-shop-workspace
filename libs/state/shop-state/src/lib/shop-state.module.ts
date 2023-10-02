import { CommonModule } from '@angular/common'

import { ModuleWithProviders, NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'

import { HttpClientModule } from '@angular/common/http'
import { PlantService } from './service/plant'
import { ProductFacade, ProductState, ShopFacade, ShopState } from './store'

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		NgxsModule.forRoot([ShopState, ProductState])
	]
})
export class LibsShopStateModule {
	static forRoot(): ModuleWithProviders<LibsShopStateModule> {
		return {
			ngModule: LibsShopStateModule,
			providers: [PlantService, ShopFacade, ProductFacade]
		}
	}
}
