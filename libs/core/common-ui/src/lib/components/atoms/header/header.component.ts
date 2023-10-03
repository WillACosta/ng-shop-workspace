import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output
} from '@angular/core'


@Component({
	selector: 'ng-shop-workspace-header-component',
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
	@Input() userName = 'User'
	@Input() shouldShowBackIcon = false
	@Input() shouldShowShopIcon = false
	@Input() cartQuantity?: number

	@Output() clickShopCart = new EventEmitter()
	@Output() clickBack = new EventEmitter()

	onClickShopCart() {
		this.clickShopCart.emit()
	}

	onClickBack() {
		this.clickBack.emit()
	}
}
