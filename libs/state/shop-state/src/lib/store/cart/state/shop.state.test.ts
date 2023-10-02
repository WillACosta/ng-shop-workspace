import { MockStateContext } from '@ng-shop-workspace/core-test'

import { MockShopState } from '../../../../test'
import { createCartItem } from '../../../models/item-cart.model'
import { ShopState } from './shop.state'

describe('ShopState', () => {
	let state: ShopState
	let stateContext: MockStateContext

	beforeEach(() => {
		stateContext = new MockStateContext()
		state = new ShopState()
	})

	describe(':state selectors', () => {
		test('should select cartTotal and returns 340', () => {
			const actual = ShopState.cartTotal(MockShopState.stateWithData)
			expect(actual).toEqual(340)
		})

		test('should select cartTotalQuantity and returns 2', () => {
			const actual = ShopState.cartTotalQuantity(MockShopState.stateWithData)
			expect(actual).toEqual(2)
		})
	})

	describe(':state actions', () => {
		test('should add new item on cart, if they not exists', () => {
			stateContext.getState.mockReturnValue(MockShopState.defaultState)

			const newItem = createCartItem({ id: 1 })
			state.addToCart(stateContext, MockShopState.addToCartAction)

			expect(stateContext.patchState).toBeCalledWith({
				items: [...MockShopState.defaultState.items, newItem]
			})
		})

		test('should update quantity and total for specific item if already exists in the state', () => {
			stateContext.getState.mockReturnValue({
				...MockShopState.defaultState,
				items: MockShopState.fakeItems
			})

			state.addToCart(stateContext, MockShopState.addToCartAction)

			expect(stateContext.patchState).toBeCalledWith({
				items: [
					{
						id: 1,
						image: 'http.fake.path',
						price: 200,
						quantity: 2,
						total: 400
					},
					MockShopState.fakeItems[1]
				]
			})
		})

		test('should remove specific item from cart state', () => {
			stateContext.getState.mockReturnValue({
				...MockShopState.defaultState,
				items: MockShopState.fakeItems
			})

			state.removeFromCart(stateContext, MockShopState.addToCartAction)

			expect(stateContext.patchState).toBeCalledWith({
				items: [MockShopState.fakeItems[1]]
			})
		})
	})
})
