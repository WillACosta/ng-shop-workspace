import { CommonModule } from '@angular/common'

import { ModuleWithProviders, NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'

import { PlantService } from './service/plant'
import { ShopFacade, ShopState } from './store'

@NgModule({
  imports: [CommonModule, NgxsModule.forRoot([ShopState])]
})
export class LibsShopStateModule {
  static forRoot(): ModuleWithProviders<LibsShopStateModule> {
    return {
      ngModule: LibsShopStateModule,
      providers: [PlantService, ShopFacade]
    }
  }
}
