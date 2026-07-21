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

import { ExecutionStatusResponse, StkTokenResponse } from './types'

type ChannelMessage = {
	message: string
	conversationId: string
}

@Injectable({
	providedIn: 'root'
})
export class AIAgentService {
	constructor(private _http: HttpClient) {
		this._getToken().subscribe()
	}

	answersChannel$ = new Subject<ChannelMessage>()

	private _finishRequestLoop$ = new Subject()
	private _accessToken = ''

	getAnswer(
		slug: string,
		payload: object,
		conversationId?: string
	): Observable<ChannelMessage> {
		return this._createExecution(slug, payload, conversationId).pipe(
			switchMap((executionId) => this._getExecutionStatus(executionId))
		)
	}

	private _getCommonHeaders = (token: string) => ({
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json'
	})

	private _createExecution(
		resourceName: string,
		payload: object,
		conversationId?: string
	): Observable<string> {
		const body = JSON.stringify({
			input_data: payload
		})

		const resolveUrl = () => {
			let fullUrl = `${environment.apiUrl}/create-execution/${resourceName}`
			if (conversationId) {
				fullUrl = `${fullUrl}?conversation_id=${conversationId}`
			}

			return fullUrl
		}

		return this._http
			.post<string>(resolveUrl(), body, {
				headers: this._getCommonHeaders(this._accessToken)
			})
			.pipe(map((executionId) => executionId))
	}

	private _getExecutionStatus(executionId: string): Observable<ChannelMessage> {
		const stkUrl = '/stk-api'

		return interval(3000).pipe(
			timeout(30000),
			takeUntil(this._finishRequestLoop$),
			switchMap(() =>
				this._http.get<ExecutionStatusResponse>(
					`${stkUrl}/callback/${executionId}`,
					{ headers: this._getCommonHeaders(this._accessToken) }
				)
			),
			skipWhile(({ progress, result }) => {
				return progress.status === 'RUNNING' || result == null
			}),
			map(({ conversation_id, result: systemResult }) => {
				const result = {
					message: systemResult!,
					conversationId: conversation_id
				}

				this.answersChannel$.next(result)
				return result
			}),
			tap(() => {
				this._finishRequestLoop$.next(true)
				this._finishRequestLoop$.complete()
			})
		)
	}

	private _getToken(): Observable<string> {
		const authUrl = environment.authUrl
		const clientId = environment.clientId
		const clientSecret = environment.clientSecret

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
			.pipe(
				map(({ access_token }) => {
					this._accessToken = access_token
					return access_token
				})
			)
	}
}
