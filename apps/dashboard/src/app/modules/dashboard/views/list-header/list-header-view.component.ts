import { Component } from '@angular/core'

@Component({
  selector: 'ng-shop-workspace-list-header-view',
  templateUrl: './list-header-view.component.html'
})
export class ListHeaderViewComponent {
  //TODO: consume auth-state -> name
  userName = 'Will'
}
