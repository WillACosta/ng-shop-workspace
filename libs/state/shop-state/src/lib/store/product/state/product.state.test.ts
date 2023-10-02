import { ProductModel } from '@ng-shop-workspace/core-common'
import { MockStateContext, provider } from '@ng-shop-workspace/core-test'
import { of } from 'rxjs'
import { ProductState } from './product.state'

class MockPlantService {
	loadAllPlants = jest.fn()
}

describe('ProductState', () => {
	let productState: ProductState
	let plantService: MockPlantService
	let stateContext: MockStateContext

	beforeEach(() => {
		stateContext = new MockStateContext()
		plantService = new MockPlantService()
		productState = new ProductState(provider(plantService))
	})

	const defaultStateValue = {
		products: []
	}

	const plantsApiResponse = {
		data: [
			{
				name: 'Plant Name',
				price: 60,
				description: 'Plant Description',
				image: 'http://image.com'
			},
			{
				name: 'Plant Name',
				price: 60,
				description: 'Plant Description',
				image: 'http://image.com'
			}
		]
	}

	const productModelList = [
		new ProductModel().deserialize(plantsApiResponse.data[0]),
		new ProductModel().deserialize(plantsApiResponse.data[1])
	]

	describe(':state actions', () => {
		test('should load all products and update state normally', (done) => {
			plantService.loadAllPlants.mockReturnValue(of(plantsApiResponse))
			stateContext.getState.mockReturnValue(defaultStateValue)

			productState.loadAllProducts(stateContext).subscribe(() => {
				expect(stateContext.patchState).toBeCalledWith({
					products: productModelList
				})

				done()
			})
		})

		test('should not call service method if products already exists in the state', (done) => {
			stateContext.getState.mockReturnValue({
				products: productModelList
			})

			productState.loadAllProducts(stateContext).subscribe(() => {
				expect(stateContext.patchState).not.toHaveBeenCalled()
				expect(plantService.loadAllPlants).not.toHaveBeenCalled()
				done()
			})
		})
	})
})
