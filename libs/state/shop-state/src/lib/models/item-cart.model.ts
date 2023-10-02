export type ItemCartModel = {
  id: number
  image: string
  quantity: number
  total: number
  price: number
}

export function createCartItem(params: Partial<ItemCartModel>) {
  return {
    quantity: 1,
    total: 0,
    ...params
  } as ItemCartModel
}
