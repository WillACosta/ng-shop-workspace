import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
	selector: 'ng-shop-workspace-shimmer',
	templateUrl: './shimmer.component.html',
	standalone: true,
	imports: [CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShimmerComponent {
	@Input() width?: number = 200
	@Input() height?: number = 60

	dynamicProperties: string

	ngOnInit(): void {
		this.dynamicProperties = this.generateDynamicClasses(
			this.width!,
			this.height!
		)
	}

	generateDynamicClasses(width: number, height: number): string {
		return `w-[${width}px] h-[${height}px]`
	}
}
