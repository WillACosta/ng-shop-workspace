import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import {
	interval,
	map,
	Observable,
	skipWhile,
	Subject,
	switchMap,
	takeUntil,
	tap,
	timeout
} from 'rxjs'

import { ApiResponseOf, ProductModel } from '@ng-shop-workspace/core-common'
import { ExecutionStatusResponse, StkTokenResponse } from './types'

@Injectable()
export class AIAgentService {
	constructor(private _http: HttpClient) {}

	private _finishRequestLoop$ = new Subject()

	getRecommendationsByProducts(
		products: ProductModel[]
	): Observable<ApiResponseOf<ProductModel>> {
		let token = ''

		return this._getToken().pipe(
			tap((t) => (token = t)),
			switchMap(() =>
				this._createExecution('recommendation-shop', products, token)
			),
			switchMap((executionId) => this._getExecutionStatus(executionId, token)),
			map((result) => JSON.parse(result))
		)
	}

	private _getToken(): Observable<string> {
		const authUrl =
			'https://idm.stackspot.com/stackspot-freemium/oidc/oauth/token'
		const clientId = '8b069af3-d37d-4d2c-b491-6d12f67420fc'
		const clientSecret =
			'FjmNEH8zC78j7Ab1en4ufZlx9g4PA14uCgPwc6ok6IChf8B0WZ5E5Cv9Sl5r00sK'

		return this._http
			.post<StkTokenResponse>(
				authUrl,
				new URLSearchParams({
					client_id: clientId,
					client_secret: clientSecret,
					grant_type: 'client_credentials'
				}),
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			)
			.pipe(map(({ access_token }) => access_token))
	}

	private _createExecution(
		resourceName: string,
		payload: object,
		token: string
	): Observable<string> {
		const stkUrl = '/v1/quick-commands'

		return this._http
			.post<string>(
				`${stkUrl}/create-execution/${resourceName}`,
				JSON.stringify({
					input_data: {
						cart_products: payload
					}
				}),
				{
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json'
					}
				}
			)
			.pipe(map((executionId) => executionId))
	}

	private _getExecutionStatus(
		executionId: string,
		token: string
	): Observable<string> {
		const stkUrl = '/v1/quick-commands'

		return interval(3000).pipe(
			timeout(30000),
			takeUntil(this._finishRequestLoop$),
			switchMap(() =>
				this._http.get<ExecutionStatusResponse>(
					`${stkUrl}/callback/${executionId}`,
					{
						headers: {
							Authorization: `Bearer ${token}`
						}
					}
				)
			),
			skipWhile(({ progress, result }) => {
				return progress.status === 'RUNNING' || result == null
			}),
			map(({ steps }) => {
				const result = steps[0]
				return result.step_result.answer
			}),
			tap(() => {
				this._finishRequestLoop$.next(true)
				this._finishRequestLoop$.complete()
			})
		)
	}
}
