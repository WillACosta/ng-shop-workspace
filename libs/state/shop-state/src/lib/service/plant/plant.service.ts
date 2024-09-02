import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ApiResponseOf } from '@ng-shop-workspace/core-common'
import { retry } from 'rxjs'

const BASE_URL = 'http://localhost:3000'

interface PlantResponse {
	name: string
	price: number
	description: string
	image: string
}

@Injectable()
export class PlantService {
	constructor(private _http: HttpClient) {}

	loadAllPlants() {
		return this._http
			.get<ApiResponseOf<PlantResponse>>(`${BASE_URL}/plants`)
			.pipe(retry(2))
	}
}
