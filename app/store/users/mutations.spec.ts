import Vuex from 'vuex'

import { createLocalVue } from '@vue/test-utils'

import state from './state'
import mutations from './mutations'

describe('store/users/mutations.ts', () => {
  let localVue
  let store

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store({
      state,
      mutations,
    })
  })

  describe('mutations', () => {
    test('setName', () => {
      store.commit('setName', 'TEST')
      expect(store.state.name).toBe('TEST')
    })
  })
})
