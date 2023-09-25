import { NgModule } from '@angular/core'

import { RouterModule } from '@angular/router'
import { DashboardComponent } from './views/dashboard-view.component'

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ]
})
export class DashboardModule {}
