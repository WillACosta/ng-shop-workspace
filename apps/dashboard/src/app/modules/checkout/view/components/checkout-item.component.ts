import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output
} from '@angular/core'

@Component({
	selector: 'ng-shop-workspace-checkout-item',
	templateUrl: './checkout-item.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutItemComponent {
	@Input() itemName: string
	@Input() itemImage: string
	@Input() altText?: string
	@Input() value: number
	@Input() quantity: number
	@Input() total: number

	@Output() deleteItem = new EventEmitter()
	@Output() editItem = new EventEmitter()

	onDeleteItem() {
		this.deleteItem.emit()
	}

	onEditItem() {
		this.editItem.emit()
	}
}
