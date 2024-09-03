import { Component, OnInit } from '@angular/core'

import { RecommendationsFacade } from '@ng-shop-workspace/shop-state'

@Component({
	selector: 'ng-shop-workspace-recommendation-list',
	templateUrl: 'recommendation-list.component.html'
})
export class RecommendationListViewComponent implements OnInit {
	constructor(private _recommendationsFacade: RecommendationsFacade) {}

	similarProducts$ = this._recommendationsFacade.recommendations$
	recommendationsLoaded$ = this._recommendationsFacade.recommendationsSuccess$
	recommendationsError$ = this._recommendationsFacade.recommendationsError$

	ngOnInit(): void {
		this._recommendationsFacade.loadRecommendations()
	}
}
