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
export class ShopState {
  @Selector()
  static cartTotal(state: ShopStateModel) {
    return state.items.reduce((acc, curr) => acc + curr.price, 0)
  }

  @Selector()
  static cartTotalQuantity(state: ShopStateModel) {
    return state.items.reduce((acc, curr) => acc + curr.quantity, 0)
  }

  @Action(AddToCartAction)
  addToCart(
    { getState, patchState }: StateContext<ShopStateModel>,
    { id }: AddToCartAction
  ) {
    const actualState = getState()
    const actualItems = actualState.items

    const itemIndexFound = actualItems.findIndex((el) => id === el.id)

    if (itemIndexFound > -1) {
      return patchState({
        items: actualItems.map((item, index) => {
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

    const newItem = createCartItem({ id })
    return patchState({
      items: [...actualItems, newItem]
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
