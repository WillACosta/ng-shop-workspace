import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import {
	Actions,
	Select,
	Store,
	ofActionErrored,
	ofActionSuccessful
} from '@ngxs/store'

import { ProductModel } from '@ng-shop-workspace/core-common'
import { ProductState, ShopState } from '@ng-shop-workspace/shop-state'
import { GetRecommendationsAction } from '../actions'
import { RecommendationState } from '../state/recommendation.state'

interface IRecommendationsFacade {
	recommendations$: Observable<ProductModel[]>
	loadRecommendations(): void
}

@Injectable()
export class RecommendationsFacade implements IRecommendationsFacade {
	constructor(private _store: Store, private _actions: Actions) {}

	recommendationsSuccess$ = this._actions.pipe(
		ofActionSuccessful(GetRecommendationsAction)
	)

	recommendationsError$ = this._actions.pipe(
		ofActionErrored(GetRecommendationsAction)
	)

	@Select(RecommendationState.recommendations)
	recommendations$: Observable<ProductModel[]>

	loadRecommendations(): void {
		const currentCartItems = this._store.selectSnapshot(ShopState.cartItems)
		const allProducts = this._store.selectSnapshot(ProductState.products)
		const userProducts = allProducts.filter((p) =>
			currentCartItems.find((i) => i.id === p.id)
		)

		this._store.dispatch(new GetRecommendationsAction(userProducts))
	}
}
