import { of } from 'rxjs'
import { SignInAction } from '../actions/auth.actions'
import { AuthState } from './auth.state'

import { MockAuthService, MockStateContext, provider } from '../../../test'

describe('AuthState', () => {
  let authService: MockAuthService
  let authState: AuthState
  let stateContext: MockStateContext

  beforeEach(() => {
    stateContext = new MockStateContext()
    authService = new MockAuthService()
    authState = new AuthState(provider(authService))
  })

  const fakeStateValue = {
    token: 'xyz',
    userName: ''
  }

  const SIGN_IN_ACTION = new SignInAction({ email: '', password: '' })

  describe(':store actions', () => {
    test('should call signIn method and set token', (done) => {
      stateContext.getState.mockReturnValue(fakeStateValue)
      authService.signIn.mockReturnValue(of({ token: 'fake-token' }))

      authState.signIn(stateContext, SIGN_IN_ACTION).subscribe(() => {
        expect(stateContext.setState).toBeCalledWith({
          ...fakeStateValue,
          token: 'fake-token',
          userName: 'USER'
        })

        expect(authService.signIn).toBeCalled()

        done()
      })
    })

    test('should call signOut and clear state data', () => {
      authState.signOut(stateContext)
      expect(stateContext.setState).toBeCalledWith({
        token: null,
        userName: null
      })
    })
  })

  describe(':store selectors', () => {
    test('should select token and get initial value as null', () => {
      expect(
        AuthState.token({
          ...fakeStateValue,
          token: null
        })
      ).toBeNull()
    })

    test('should select isAuthenticated and get false as initial state', () => {
      expect(
        AuthState.isAuthenticated({
          ...fakeStateValue,
          token: null
        })
      ).toBeFalsy()
    })

    test('should get correct token value from state', () => {
      expect(AuthState.token(fakeStateValue)).toBe('xyz')
    })

    test('should get whether user authenticated or not', () => {
      expect(AuthState.isAuthenticated(fakeStateValue)).toBeTruthy()
    })
  })
})
