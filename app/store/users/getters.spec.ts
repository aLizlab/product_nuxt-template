import Vuex from 'vuex'

import { createLocalVue } from '@vue/test-utils'

import getters from './getters'

describe('store/users/mutations.ts', () => {
  let localVue
  let store

  const state = {
    name: 'TEST',
  }

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store({
      state,
      // @ts-ignore
      getters,
    })
  })

  describe('getters', () => {
    test('name', () => {
      const result = store.getters.name
      expect(result).toBe('TEST')
    })
  })
})
