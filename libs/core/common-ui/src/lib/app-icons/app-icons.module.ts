import { NgModule } from '@angular/core'

import {
	ArrowLeft,
	Edit,
	LucideAngularModule,
	Plus,
	Search,
	ShoppingBag,
	ShoppingCart,
	Sparkles,
	Trash
} from 'lucide-angular'

const icons = {
	Sparkles,
	ArrowLeft,
	Edit,
	Plus,
	Search,
	ShoppingBag,
	ShoppingCart,
	Trash
}

@NgModule({
	imports: [LucideAngularModule.pick(icons)],
	exports: [LucideAngularModule]
})
export class AppIconsModule {}
