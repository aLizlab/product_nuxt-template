import Vuex from 'vuex'

import { createLocalVue } from '@vue/test-utils'

import state from './state'
import mutations from './mutations'
import actions from './actions'

describe('store/users/actions.ts', () => {
  let localVue
  let store

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store({
      state,
      mutations,
      // @ts-ignore
      actions,
    })
  })

  describe('actions', () => {
    test('setName', () => {
      store.dispatch('setName', 'TEST')
      expect(store.state.name).toBe('TEST')
    })
  })
})
