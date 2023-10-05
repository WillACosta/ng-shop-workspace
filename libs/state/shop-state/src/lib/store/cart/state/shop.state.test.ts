import { MockStateContext } from '@ng-shop-workspace/core-test'

import { MockCartData } from '../../../../test'
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
		test('should select cartTotal and returns 280', () => {
			const actual = ShopState.cartTotal(MockCartData.stateWithData)
			expect(actual).toEqual(280)
		})

		test('should select cartTotalQuantity and returns 2', () => {
			const actual = ShopState.cartTotalQuantity(MockCartData.stateWithData)
			expect(actual).toEqual(2)
		})

		test('should select cartItems and returns an Array<ItemCartModel>', () => {
			const actual = ShopState.cartItems(MockCartData.stateWithData)
			expect(actual).toEqual(MockCartData.fakeItems)
		})
	})

	describe(':state actions', () => {
		test('should add new item on cart, if they not exists', () => {
			stateContext.getState.mockReturnValue(MockCartData.defaultState)

			const expectedItem = createCartItem({
				id: 1,
				name: 'Test Item',
				image: 'http.fake.path',
				price: 140
			})

			state.addToCart(stateContext, MockCartData.addToCartAction)

			expect(stateContext.patchState).toBeCalledWith({
				items: [...MockCartData.defaultState.items, expectedItem]
			})
		})

		test('should update quantity and total for specific item if already exists in the state', () => {
			stateContext.getState.mockReturnValue({
				...MockCartData.defaultState,
				items: MockCartData.fakeItems
			})

			state.addToCart(stateContext, MockCartData.addToCartAction)

			expect(stateContext.patchState).toBeCalledWith({
				items: [
					{
						id: 1,
						name: 'Test Item',
						image: 'http.fake.path',
						price: 140,
						quantity: 2,
						total: 280
					},
					MockCartData.fakeItems[1]
				]
			})
		})

		test('should remove specific item from cart state', () => {
			stateContext.getState.mockReturnValue({
				...MockCartData.defaultState,
				items: MockCartData.fakeItems
			})

			state.removeFromCart(stateContext, MockCartData.removeFromCartAction)

			expect(stateContext.patchState).toBeCalledWith({
				items: [MockCartData.fakeItems[1]]
			})
		})
	})
})
