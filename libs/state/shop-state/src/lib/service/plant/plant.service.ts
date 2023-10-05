import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { retry } from 'rxjs'

const BASE_URL = 'http://localhost:3000'

interface ApiResponseOf<T> {
	data: Array<T>
}

interface PlantResponse {
	name: string
	price: number
	description: string
	image: string
}

@Injectable()
export class PlantService {
	constructor(private _http: HttpClient) {}

	private _lang = 'en'

	loadAllPlants() {
		return this._http
			.get<ApiResponseOf<PlantResponse>>(`${BASE_URL}/plants-${this._lang}`)
			.pipe(retry(2))
	}
}
