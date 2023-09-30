export class ProductModel {
  name: string
  price: number
  description: string
  image: string

  deserialize(input: NonNullable<unknown>) {
    Object.assign(this, input)
    return this
  }
}
