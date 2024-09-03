import { Component, OnInit } from '@angular/core'
import { ProductModel } from '@ng-shop-workspace/core-common'

import { RecommendationsFacade } from '@ng-shop-workspace/shop-state'

@Component({
	selector: 'ng-shop-workspace-recommendation-list',
	templateUrl: 'recommendation-list.component.html'
})
export class RecommendationListViewComponent implements OnInit {
	constructor(private _recommendationsFacade: RecommendationsFacade) {}
	similarProducts$ = this._recommendationsFacade.recommendations$

	fakeProducts = [
		{
			id: 5,
			name: 'Cactus',
			description:
				'The cactus, adapted to arid climates, is a unique and modern addition to your plant collection. Its intriguing shapes and low care requirements make it a popular choice.',
			image: 'http://localhost:3002/assets/images/plant-e.svg',
			price: 9.99,
			metadata: {
				species: 'Cactaceae',
				predominant_color: 'green',
				average_height: '15-150 cm',
				family: 'Cactus',
				care_level: 'Easy',
				light_requirement: 'Full sunlight',
				water_requirement: 'Low',
				environment: 'Indoor, Outdoor',
				flowering_season: 'Spring, Summer'
			}
		},
		{
			id: 6,
			name: 'Ficus',
			description:
				'The ficus, with its lush and shiny leaves, is a versatile indoor plant. It adapts to different light conditions and adds a touch of freshness to the decor.',
			image: 'http://localhost:3002/assets/images/plant-f.svg',
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
			id: 7,
			name: 'Violet',
			description:
				'The violet, with its small and vibrant flowers, is perfect for adding color to indoor spaces. Easy to care for, it is a popular choice among plant lovers.',
			image: 'http://localhost:3002/assets/images/plant-g.svg',
			price: 15.99,
			metadata: {
				species: 'Violaceae',
				predominant_color: 'purple, white, pink',
				average_height: '10-20 cm',
				family: 'Violet',
				care_level: 'Easy',
				light_requirement: 'Indirect sunlight',
				water_requirement: 'Moderate',
				environment: 'Indoor',
				flowering_season: 'Spring, Summer'
			}
		},
		{
			id: 8,
			name: 'Fern',
			description:
				'The fern, with its elegant and delicate leaves, brings a sense of freshness and naturalness. Ideal for shaded areas, it adds a touch of nature to any environment.',
			image: 'http://localhost:3002/assets/images/plant-h.svg',
			price: 17.25,
			metadata: {
				species: 'Polypodiopsida',
				predominant_color: 'green',
				average_height: '30-100 cm',
				family: 'Fern',
				care_level: 'Moderate',
				light_requirement: 'Low to moderate light',
				water_requirement: 'High',
				environment: 'Indoor, Outdoor',
				flowering_season: 'Non-flowering'
			}
		}
	] as ProductModel[]

	ngOnInit(): void {
		null
		// this._recommendationsFacade.loadRecommendations()
	}
}
