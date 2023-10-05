export type ItemCartModel = {
	id: number
	name: string
	image: string
	quantity: number
	total: number
	price: number
}

export function createCartItem(params: Partial<ItemCartModel>) {
	return {
		...params,
		quantity: 1,
		total: params.price
	} as ItemCartModel
}
