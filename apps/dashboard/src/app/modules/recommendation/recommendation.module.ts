import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { LucideAngularModule, Sparkles } from 'lucide-angular'

import { LibsShopStateModule } from '@ng-shop-workspace/shop-state'

import { AppComponentsModule } from 'src/app/components/components.module'
import { RecommendationListViewComponent } from './views/recommendation-list/recommendation-list.component'

@NgModule({
	imports: [
		CommonModule,
		AppComponentsModule,
		LucideAngularModule.pick({ Sparkles }),
		LibsShopStateModule.configure()
	],
	declarations: [RecommendationListViewComponent],
	// providers: [RecommendationsFacade],
	exports: [RecommendationListViewComponent]
})
export class RecommendationModule {}
