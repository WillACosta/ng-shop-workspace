import {
  AddToCartAction,
  RemoveFromCartAction
} from '../../lib/store/cart/actions'

export abstract class MockShopState {
  static defaultState = {
    checkedOut: false,
    items: [],
    total: 0
  }

  static addToCartAction = new AddToCartAction(1)
  static removeFromCartAction = new RemoveFromCartAction(1)

  static fakeItems = [
    {
      id: 1,
      image: 'http.fake.path',
      price: 200,
      quantity: 1,
      total: 200
    },
    {
      id: 2,
      image: 'http.fake.path',
      price: 140,
      quantity: 1,
      total: 140
    }
  ]

  static stateWithData = {
    checkedOut: false,
    items: MockShopState.fakeItems,
    total: 0
  }
}
