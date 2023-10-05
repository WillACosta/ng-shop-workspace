import { Injectable } from '@angular/core'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { ShopStateModel } from '../../../models'
import { createCartItem } from '../../../models/item-cart.model'
import { AddToCartAction, RemoveFromCartAction } from '../actions'

@State<ShopStateModel>({
	name: 'shop',
	defaults: {
		checkedOut: false,
		items: [],
		total: 0
	}
})
@Injectable()
export class ShopState {
	@Selector()
	static cartTotal(state: ShopStateModel) {
		return state.items.reduce((acc, curr) => acc + curr.total, 0)
	}

	@Selector()
	static cartTotalQuantity(state: ShopStateModel) {
		return state.items.reduce((acc, curr) => acc + curr.quantity, 0)
	}

	@Selector()
	static cartItems(state: ShopStateModel) {
		return state.items
	}

	@Action(AddToCartAction)
	addToCart(
		{ getState, patchState }: StateContext<ShopStateModel>,
		{ item }: AddToCartAction
	) {
		const currentState = getState()
		const currentItems = currentState.items
		const { id } = item

		const itemIndexFound = currentItems.findIndex((el) => id === el.id)

		if (itemIndexFound > -1) {
			return patchState({
				items: currentItems.map((item, index) => {
					if (index !== itemIndexFound) {
						return item
					}

					const newQuantity = item.quantity + 1

					return {
						...item,
						quantity: newQuantity,
						total: newQuantity * item.price
					}
				})
			})
		}

		const newItem = createCartItem(item)
		return patchState({
			items: [...currentItems, newItem]
		})
	}

	@Action(RemoveFromCartAction)
	removeFromCart(
		{ getState, patchState }: StateContext<ShopStateModel>,
		{ id }: RemoveFromCartAction
	) {
		const actualState = getState()
		const actualItems = actualState.items

		patchState({
			items: actualItems.filter((el) => el.id != id)
		})
	}
}
