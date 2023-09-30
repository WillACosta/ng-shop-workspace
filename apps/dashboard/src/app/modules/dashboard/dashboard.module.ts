import { AsyncPipe, CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { IconsModule } from '@ng-shop-workspace/common-ui'

import { ListHeaderViewComponent } from './views/list-header/list-header-view.component'
import { PlantListViewComponent } from './views/plant-list/plant-list-view.component'

@NgModule({
  declarations: [ListHeaderViewComponent, PlantListViewComponent],
  imports: [
    AsyncPipe,
    CommonModule,
    IconsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlantListViewComponent
      }
    ])
  ]
})
export class DashboardModule {}
