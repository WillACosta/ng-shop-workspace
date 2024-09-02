import { Injectable } from '@angular/core'
import { ProductModel } from '@ng-shop-workspace/core-common'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { map, tap } from 'rxjs'
import { AIAgentService } from '../../../service/ai-agent'
import { GetRecommendationsAction } from '../actions'

type RecommendationStateModel = {
	products: ProductModel[]
}

@State<RecommendationStateModel>({
	name: 'recommendation',
	defaults: {
		products: []
	}
})
@Injectable()
export class RecommendationState {
	constructor(private _aiService: AIAgentService) {}

	@Selector()
	static recommendations(state: RecommendationStateModel) {
		return state.products
	}

	@Action(GetRecommendationsAction)
	getRecommendations(
		{ getState, patchState }: StateContext<RecommendationStateModel>,
		{ payload }: GetRecommendationsAction
	) {
		return this._aiService.getRecommendationsByProducts(payload).pipe(
			map((response) => response.data),
			map((value) => value.map((e) => new ProductModel().deserialize(e))),
			tap((products) => {
				patchState({ products })
			})
		)
	}
}
