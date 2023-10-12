import { provider } from '@ng-shop-workspace/core-test'
import { of } from 'rxjs'
import { PlantListViewComponent } from './plant-list-view.component'

class MockShopFacade {}

class MockProductFacade {
	products$ = of([])
}

describe('PlantListView', () => {
	let shopFacade: MockShopFacade
	let productFacade: MockProductFacade
	let component: PlantListViewComponent

	beforeEach(() => {
		shopFacade = new MockShopFacade()
		productFacade = new MockProductFacade()
		component = new PlantListViewComponent(
			provider(shopFacade),
			provider(productFacade)
		)
	})

	describe(':product list', () => {
		test('should retrieve products from product facade', (done) => {
			component.products$.subscribe((data) => {
				expect(data).toEqual([])
				done()
			})
		})
	})
})
