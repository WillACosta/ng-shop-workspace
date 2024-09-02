import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { ModuleWithProviders, NgModule } from '@angular/core'

import { NgxsModule } from '@ngxs/store'

import {
	ProductFacade,
	ProductState,
	RecommendationsFacade,
	RecommendationState,
	ShopFacade,
	ShopState
} from './store'

import { AIAgentService } from './service/ai-agent'
import { PlantService } from './service/plant'

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		NgxsModule.forRoot([ShopState, ProductState, RecommendationState])
	]
})
export class LibsShopStateModule {
	static configure(): ModuleWithProviders<LibsShopStateModule> {
		return {
			ngModule: LibsShopStateModule,
			providers: [
				AIAgentService,
				PlantService,
				ShopFacade,
				ProductFacade,
				RecommendationsFacade
			]
		}
	}
}
