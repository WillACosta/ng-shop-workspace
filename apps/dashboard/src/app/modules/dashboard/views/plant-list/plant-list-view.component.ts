import { Component, OnInit } from '@angular/core'
import { ProductModel } from '@ng-shop-workspace/core-common'
import { ProductFacade, ShopFacade } from '@ng-shop-workspace/shop-state'

@Component({
	selector: 'ng-shop-workspace-dashboard-view',
	templateUrl: './plant-list-view.component.html'
})
export class PlantListViewComponent implements OnInit {
	constructor(
		private _shopFacade: ShopFacade,
		private _productFacade: ProductFacade
	) {}

	products$ = this._productFacade.products$

	ngOnInit(): void {
		this._getAllProducts()
	}

	addToCart(item: ProductModel) {
		this._shopFacade.addToCart(item)
	}

	private _getAllProducts() {
		this._productFacade.getAllProducts()
	}
}
