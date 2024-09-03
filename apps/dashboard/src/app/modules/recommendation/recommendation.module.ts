import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { LucideAngularModule, Sparkles } from 'lucide-angular'

import { LibsShopStateModule } from '@ng-shop-workspace/shop-state'

import { ShimmerComponent } from '@ng-shop-workspace/common-ui'
import { DashboardComponentsModule } from 'src/app/components/components.module'
import { RecommendationListViewComponent } from './views/recommendation-list/recommendation-list.component'

@NgModule({
	imports: [
		CommonModule,
		DashboardComponentsModule,
		ShimmerComponent,
		LucideAngularModule.pick({ Sparkles }),
		LibsShopStateModule.configure()
	],
	declarations: [RecommendationListViewComponent],
	exports: [RecommendationListViewComponent]
})
export class RecommendationModule {}
