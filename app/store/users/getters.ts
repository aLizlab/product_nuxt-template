import { GetterTree } from 'vuex'

import { UserState } from './types'
import { RootState } from './../types'

const getters: GetterTree<UserState, RootState> = {
  name (state): String {
    return state.name || 'Ohhh'
  },
}

export default getters
