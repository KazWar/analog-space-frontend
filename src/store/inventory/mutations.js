/**
 * This store is only for presentation purposes
 */

export default {
  storeItems(state, items = []) {
    state.items = items
    state.hasItems = true
  },

  addItem(state, item) {
    state.items.push(item)
  },

  updateItem(state, item) {
    const index = state.items.findIndex(i => i.id === item.id)
    // On specified index remove the specified number of records.
    // Optionally inserts new records at this position
    state.items.splice(index, 1, item)
  }
}
