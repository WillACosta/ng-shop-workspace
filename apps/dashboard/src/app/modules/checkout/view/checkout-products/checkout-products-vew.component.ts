import { Component } from '@angular/core'
import { ItemCartModel } from '@ng-shop-workspace/shop-state'

import { Observable, of } from 'rxjs'

@Component({
	selector: 'ng-shop-workspace-checkout-products',
	templateUrl: './checkout-products-view.component.html'
})
export class CheckoutProductsViewComponent {
	// TODO: get items from cart STATE
	cartProducts$: Observable<ItemCartModel[]> = of([
		{
			id: 1,
			name: 'Samambaia',
			price: 200,
			image: 'http://localhost:4202/assets/images/plant-a.svg',
			quantity: 2,
			total: 400
		},
		{
			id: 2,
			name: 'Samambaia',
			price: 200,
			image: 'http://localhost:4202/assets/images/plant-a.svg',
			quantity: 2,
			total: 400
		},
		{
			id: 3,
			name: 'Samambaia',
			price: 200,
			image: 'http://localhost:4202/assets/images/plant-a.svg',
			quantity: 2,
			total: 400
		},
		{
			id: 4,
			name: 'Samambaia',
			price: 200,
			image: 'http://localhost:4202/assets/images/plant-a.svg',
			quantity: 2,
			total: 400
		},
		{
			id: 5,
			name: 'Samambaia',
			price: 200,
			image: 'http://localhost:4202/assets/images/plant-a.svg',
			quantity: 2,
			total: 400
		},
		{
			id: 6,
			name: 'Samambaia',
			price: 200,
			image: 'http://localhost:4202/assets/images/plant-a.svg',
			quantity: 2,
			total: 400
		}
	])

	// TODO: fire event to ShopFacade
	onDeleteItem(id: number) {
		// TODO:
		id
	}

	onBack() {
		// TODO: navigate to previous screen
	}
}
