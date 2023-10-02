import { NgModule } from '@angular/core'

import { FeatherModule } from 'angular-feather'

import { Plus, Search, ShoppingBag, ShoppingCart } from 'angular-feather/icons'

const icons = {
  Search,
  ShoppingBag,
  ShoppingCart,
  Plus
}

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class IconsModule {}
