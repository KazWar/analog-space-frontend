import { Router } from '../../router'

export function handleError({ commit }, error) {
  commit('handleError', error)
  Router.push({ name: 'error', params: { id: new Date().getTime() } })
}

export function clearError({ commit }) {
  commit('clearError')
}

export function toggleMainDrawer({ commit, state }) {
  if (state.mainDrawer === true) {
    commit('setMainDrawer', false)
  } else {
    commit('setMainDrawer', true)
  }
}

export function toggleUserDrawer({ commit, state }) {
  if (state.userDrawer === true) {
    commit('setUserDrawer', false)
  } else {
    commit('setUserDrawer', true)
  }
}
