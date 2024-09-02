import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { Observable } from 'rxjs'

import { environment } from '@environment'
import { resolveAppImagePath } from '@ng-shop-workspace/core-common'
import { ItemCartModel, ShopFacade } from '@ng-shop-workspace/shop-state'

@Component({
	selector: 'ng-shop-workspace-checkout-products',
	templateUrl: './checkout-products-view.component.html'
})
export class CheckoutProductsViewComponent {
	constructor(private _shopFacade: ShopFacade, private _router: Router) {}

	cartProducts$: Observable<ItemCartModel[]> = this._shopFacade.cartItems$

	noItemFoundImagePath = resolveAppImagePath({
		baseUrl: environment.baseUrl,
		resourceName: 'app/no-found-item'
	})

	onDeleteItem(id: number) {
		this._shopFacade.removeFromCart(id)
	}

	onBack() {
		this._router.navigate(['/'])
	}
}
