import { ActionTree } from 'vuex'

// import firebase from '@/plugins/firebase'

import { UserState } from './types'
import { RootState } from './../types'

// const db = firebase.firestore()
// const dbUsers = db.collection('users')

const actions: ActionTree<UserState, RootState> = {
  setName ({ commit }, newName: string): void {
    commit('setName', newName)
  },
}

export default actions
