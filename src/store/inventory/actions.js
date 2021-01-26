/**
 * This store is only for presentation purposes
 */

export default {
  async loadItems({ commit, dispatch }) {
    commit('storeInventoryItems', data)
  },

  async loadItem({ state }, id) {
    return state.orderItems.find(c => c.id === id)
  },

  async saveItem({ commit, dispatch }, item) {
    if (item.barCode) {
      commit('updateItem', item)
    } else {
      commit('addItem', item)
    }
  }
}
