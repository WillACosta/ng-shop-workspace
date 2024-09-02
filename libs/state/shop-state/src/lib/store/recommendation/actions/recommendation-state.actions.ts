import { ProductModel } from '@ng-shop-workspace/core-common'

export class GetRecommendationsAction {
	static type = '[Recommendation State] get-recommendations'
	constructor(public payload: ProductModel[]) {}
}
