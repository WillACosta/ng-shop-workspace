import { ItemCartModel } from '@ng-shop-workspace/shop-state';
export class GetProductsAction {
  static readonly type = '[SHOP] get-products'
}

export class AddToCartAction {
  static readonly type = '[SHOP] add-to-cart'
  constructor(public item: ItemCartModel) {}
}

export class RemoveFromCartAction {
  static readonly type = '[SHOP] remove-from-cart'
  constructor(public id: number) {}
}
