export class ProductModel {
	id: number
	name: string
	price: number
	description: string
	image: string
	metadata: {
		species: string
		predominant_color: string
		average_height: string
		family: string
		care_level: string
		light_requirement: string
		water_requirement: string
		environment: string
		flowering_season: string
	}

	deserialize(input: NonNullable<unknown>) {
		Object.assign(this, input)
		return this
	}
}
