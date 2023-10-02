import { fakeHttpClient, provider } from '@ng-shop-workspace/core-test'
import { of, throwError } from 'rxjs'

import { AuthService } from './auth.service'

describe('AuthService', () => {
	let service: AuthService

	const fakeBody = {
		email: 'email@example.com',
		password: '123fake'
	}

	const fakeApiUrl = 'http://auth.api.com'

	beforeEach(() => {
		service = new AuthService(provider(fakeHttpClient), { apiUrl: fakeApiUrl })
	})

	test('should call signIn method and returns correct user data', (done) => {
		const userDataFromApi = { token: 'fakeValue' }

		fakeHttpClient.post.mockReturnValue(of(userDataFromApi))

		service.signIn(fakeBody).subscribe((response) => {
			expect(fakeHttpClient.post).toBeCalledWith(fakeApiUrl, fakeBody)
			expect(response).toBe(userDataFromApi)

			done()
		})
	})

	test('should call signIn and throw an error', () => {
		fakeHttpClient.post.mockReturnValue(
			throwError(() => {
				throw new Error('error')
			})
		)

		service.signIn(fakeBody).subscribe((response) => {
			expect(response).toBeInstanceOf(Error)
		})
	})
})
