import { ItemCartModel } from './item-cart.model'

export interface ShopStateModel {
  checkedOut: boolean
  items: ItemCartModel[]
  total: number
}
