import { Component, OnInit } from '@angular/core'
import { PlantService } from '@modules/dashboard/data'
import { ProductModel } from '@ng-shop-workspace/core-common'
import { ShopFacade } from '@ng-shop-workspace/shop-state'
import { Observable, map } from 'rxjs'

@Component({
	selector: 'ng-shop-workspace-dashboard-view',
	templateUrl: './plant-list-view.component.html'
})
export class PlantListViewComponent implements OnInit {
	constructor(
		private _plantService: PlantService,
		private _shopFacade: ShopFacade
	) {}

	products$: Observable<ProductModel[]>

	ngOnInit(): void {
		this._setListeners()
	}

	addToCart(item: ProductModel) {
		this._shopFacade.addToCart(item.id)
	}

	removeFromCart() {
		// TODO:
	}

	private _setListeners() {
		this.products$ = this._plantService.loadAllPlants().pipe(
			map((response) => response.data),
			map((value) => value.map((e) => new ProductModel().deserialize(e)))
		)
	}
}
