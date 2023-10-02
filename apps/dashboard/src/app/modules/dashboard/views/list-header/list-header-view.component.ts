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

	//TODO: consume auth-state -> name
	userName = 'Will'

	redirectToCheckout() {
		// TODO: create navigation service
		this._router.navigate(['/dashboard/checkout'])
	}
}
