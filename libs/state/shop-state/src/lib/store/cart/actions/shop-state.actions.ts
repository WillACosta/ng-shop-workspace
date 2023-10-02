export class GetProductsAction {
  static readonly type = '[SHOP] get-products'
}

export class AddToCartAction {
  static readonly type = '[SHOP] add-to-cart'
  constructor(public id: number) {}
}

export class RemoveFromCartAction {
  static readonly type = '[SHOP] remove-from-cart'
  constructor(public id: number) {}
}
