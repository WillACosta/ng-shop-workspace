import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable, of } from 'rxjs'

import { ApiResponseOf, ProductModel } from '@ng-shop-workspace/core-common'

@Injectable()
export class AIAgentService {
	constructor(private _http: HttpClient) {}

	getRecommendationsByProducts(
		products: ProductModel[]
	): Observable<ApiResponseOf<ProductModel>> {
		return of({
			data: [
				{
					id: 6,
					name: 'Ficus',
					description:
						'The ficus, with its lush and shiny leaves, is a versatile indoor plant. It adapts to different light conditions and adds a touch of freshness to the decor.',
					image: 'http://localhost:4202/assets/images/plant-f.svg',
					price: 22.5,
					metadata: {
						species: 'Moraceae',
						predominant_color: 'green',
						average_height: '100-300 cm',
						family: 'Ficus',
						care_level: 'Moderate',
						light_requirement: 'Indirect sunlight',
						water_requirement: 'Moderate',
						environment: 'Indoor',
						flowering_season: 'Year-round'
					}
				},
				{
					id: 10,
					name: 'Bromeliad',
					description:
						'The bromeliad, with its vivid colors and unique shape, is a tropical plant that adds an exotic touch to the decor. Its leaves form an elegant and lasting rosette.',
					image: 'http://localhost:4202/assets/images/plant-j.svg',
					price: 24.5,
					metadata: {
						species: 'Bromeliaceae',
						predominant_color: 'red, pink, yellow',
						average_height: '30-90 cm',
						family: 'Bromeliad',
						care_level: 'Moderate',
						light_requirement: 'Bright, indirect sunlight',
						water_requirement: 'Moderate',
						environment: 'Indoor',
						flowering_season: 'Year-round'
					}
				}
			] as ProductModel[]
		})
	}
}
