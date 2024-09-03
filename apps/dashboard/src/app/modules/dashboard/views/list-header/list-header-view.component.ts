import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ShopFacade } from '@ng-shop-workspace/shop-state'

@Component({
	selector: 'ng-shop-workspace-list-header-view',
	templateUrl: './list-header-view.component.html'
})
export class ListHeaderViewComponent {
	constructor(private _shopFacade: ShopFacade, private _router: Router) {}

	cartQuantity$ = this._shopFacade.cartTotalQuantity$
	cartTotal$ = this._shopFacade.cartTotal$

	//TODO: consume auth-state -> name
	userName = 'Will'

	redirectToCheckout() {
		// TODO: delegate this to a navigation service
		const isInternalRoute = window.location.href.includes('3002')
		if (isInternalRoute) {
			this._router.navigate(['/checkout'])
		} else {
			this._router.navigate(['/dashboard/checkout'])
		}
	}
}
