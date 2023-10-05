import {
	ItemCartModel,
	createCartItem
} from '@ng-shop-workspace/shop-state'
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs'

import { Injectable } from '@angular/core'
import { ProductModel } from '@ng-shop-workspace/core-common'
import { AddToCartAction, RemoveFromCartAction } from '../actions'
import { ShopState } from '../state/shop.state'

interface IShopFacade {
	cartTotal$: Observable<number>
	addToCart(product: ProductModel): void
	removeFromCart(id: number): void
}

@Injectable()
export class ShopFacade implements IShopFacade {
	constructor(private _store: Store) {}

	@Select(ShopState.cartTotal)
	cartTotal$: Observable<number>

	@Select(ShopState.cartTotalQuantity)
	cartTotalQuantity$: Observable<number>

	@Select(ShopState.cartItems)
	cartItems$: Observable<ItemCartModel[]>

	addToCart({ id, name, price, image }: ProductModel): void {
		this._store.dispatch(
			new AddToCartAction(
				createCartItem({
					id,
					name,
					price,
					image
				})
			)
		)
	}

	removeFromCart(id: number): void {
		this._store.dispatch(new RemoveFromCartAction(id))
	}
}
