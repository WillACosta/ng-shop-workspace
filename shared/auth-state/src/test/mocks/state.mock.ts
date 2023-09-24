export class MockStore {
  dispatch = jest.fn()
  selectSnapshot = jest.fn()
  select = jest.fn()
  selectOnce = jest.fn()
  reset = jest.fn()
  subscribe = jest.fn()
}

export class MockStateContext {
  getState = jest.fn()
  patchState = jest.fn()
  setState = jest.fn()
  dispatch = jest.fn()
}
