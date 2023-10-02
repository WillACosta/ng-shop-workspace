import { Component } from '@angular/core';
import { ShopFacade } from '@ng-shop-workspace/shop-state';

@Component({
  selector: 'ng-shop-workspace-list-header-view',
  templateUrl: './list-header-view.component.html'
})
export class ListHeaderViewComponent {
  constructor(private _shopFacade: ShopFacade) {}

  cartQuantity$ = this._shopFacade.cartTotalQuantity$

  //TODO: consume auth-state -> name
  userName = 'Will'
}
