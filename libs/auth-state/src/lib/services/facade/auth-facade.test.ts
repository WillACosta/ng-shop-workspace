import { MockStore, provider } from '../../../test'
import { SignInAction, SignOutAction } from '../../store'

import { AuthFacade } from './auth-facade'

describe('AuthFacade', () => {
  let facadeService: AuthFacade
  let store: MockStore

  beforeEach(() => {
    store = new MockStore()
    facadeService = new AuthFacade(provider(store))
  })

  // test('should select isAuthenticated from store', async () => {
  //   store.select.mockReturnValue({ token: 'xyz' })

  //   const actual = await facadeService.isAuthenticated$.toPromise()
  //   expect(actual).toBeTruthy()
  // })

  test('should dispatch signIn action to the store', () => {
    store.dispatch.mockReturnValue(Promise.resolve())

    const payload = { email: '', password: '' }
    const ACTION = new SignInAction(payload)

    facadeService.signIn(payload)
    expect(store.dispatch).toBeCalledWith(ACTION)
  })

  test('should dispatch signOut action to the store', () => {
    store.dispatch.mockReturnValue(Promise.resolve())

    const ACTION = new SignOutAction()
    facadeService.signOut()

    expect(store.dispatch).toBeCalledWith(ACTION)
  })
})
