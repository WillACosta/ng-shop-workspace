import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

import { ProductModel } from '@ng-shop-workspace/core-common'

@Component({
	selector: 'ng-shop-workspace-product-item',
	templateUrl: './product-item.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
	@Input() product: ProductModel
	@Output() AddToCartEvent = new EventEmitter<ProductModel>()

	addToCart() {
		this.AddToCartEvent.emit(this.product)
	}
}
