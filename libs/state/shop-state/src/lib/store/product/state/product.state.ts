import { Injectable } from '@angular/core'
import { ProductModel } from '@ng-shop-workspace/core-common'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { map, tap } from 'rxjs/operators'

import { of } from 'rxjs'
import { ProductStateModel } from '../../../models'
import { PlantService } from '../../../service/plant'
import { LoadAllProductsAction } from '../actions'

@State<ProductStateModel>({
	name: 'product',
	defaults: {
		products: []
	}
})
@Injectable()
export class ProductState {
	constructor(private _plantService: PlantService) {}

	@Selector()
	static products(state: ProductStateModel) {
		return state.products
	}

	@Action(LoadAllProductsAction)
	loadAllProducts({ getState, patchState }: StateContext<ProductStateModel>) {
		const actualState = getState()
		if (actualState.products.length > 0) return of({})

		return this._plantService.loadAllPlants().pipe(
			map((response) => response.data),
			map((value) => value.map((e) => new ProductModel().deserialize(e))),
			tap((products) => {
				patchState({
					products
				})
			})
		)
	}
}
