import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'

import { Injectable } from '@angular/core'
import { AddToCartAction, RemoveFromCartAction } from '../actions'
import { ShopState } from '../state/shop.state'

interface IShopFacade {
	cartTotal$: Observable<number>
	addToCart(id: number): void
	removeFromCart(id: number): void
}

@Injectable()
export class ShopFacade implements IShopFacade {
	constructor(private _store: Store) {}

	@Select(ShopState.cartTotal)
	cartTotal$: Observable<number>

	@Select(ShopState.cartTotalQuantity)
	cartTotalQuantity$: Observable<number>

	addToCart(id: number): void {
		this._store.dispatch(new AddToCartAction(id))
	}

	removeFromCart(id: number): void {
		this._store.dispatch(new RemoveFromCartAction(id))
	}
}
