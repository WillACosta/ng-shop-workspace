import { ItemCartModel, createCartItem } from '@ng-shop-workspace/shop-state'

import {
	AddToCartAction,
	RemoveFromCartAction
} from '../../lib/store/cart/actions'

export abstract class MockCartData {
	static defaultState = {
		checkedOut: false,
		items: [],
		total: 0
	}

	static addToCartAction = new AddToCartAction(
		createCartItem({
			id: 1,
			name: 'Test Item',
			image: 'http.fake.path',
			price: 140,
			quantity: 1
		})
	)

	static removeFromCartAction = new RemoveFromCartAction(1)

	static fakeItems: ItemCartModel[] = [
		createCartItem({
			id: 1,
			name: 'Test Item',
			image: 'http.fake.path',
			price: 140,
			quantity: 1,
			total: 140
		}),
		createCartItem({
			id: 2,
			name: 'Test Item',
			image: 'http.fake.path',
			price: 140,
			quantity: 1,
			total: 140
		})
	]

	static stateWithData = {
		checkedOut: false,
		items: MockCartData.fakeItems,
		total: 0
	}
}
