import { MutationTree } from 'vuex'

import { UserState } from './types'

const mutations: MutationTree<UserState> = {
  setName (state, name: string) {
    state.name = name
  },
}

export default mutations
