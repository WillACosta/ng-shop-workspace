import { Injectable } from '@angular/core'
import { ProductModel } from '@ng-shop-workspace/core-common'

import {
	Actions,
	Select,
	Store,
	ofActionErrored,
	ofActionSuccessful
} from '@ngxs/store'

import { Observable } from 'rxjs'
import { LoadAllProductsAction } from '../actions'
import { ProductState } from '../state'

interface IProductFacade {
	products$: Observable<ProductModel[]>
	getAllProducts(): Observable<ProductModel[]>
}

@Injectable()
export class ProductFacade implements IProductFacade {
	constructor(private _store: Store, private _actions: Actions) {}

	ofLoadAllProductsSuccessful$ = this._actions.pipe(
		ofActionSuccessful(LoadAllProductsAction)
	)

	ofLoadAllProductsErrored$ = this._actions.pipe(
		ofActionErrored(LoadAllProductsAction)
	)

	@Select(ProductState.products)
	products$: Observable<ProductModel[]>

	getAllProducts(): Observable<ProductModel[]> {
		return this._store.dispatch(new LoadAllProductsAction())
	}
}
