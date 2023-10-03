import { NgModule } from '@angular/core'

import { FeatherModule } from 'angular-feather'

import {
	ArrowLeft,
	Edit,
	Plus,
	Search,
	ShoppingBag,
	ShoppingCart,
	Trash
} from 'angular-feather/icons'

const icons = {
	Search,
	ShoppingBag,
	ShoppingCart,
	Plus,
	Trash,
	Edit,
	ArrowLeft
}

@NgModule({
	imports: [FeatherModule.pick(icons)],
	exports: [FeatherModule]
})
export class IconsModule {}
