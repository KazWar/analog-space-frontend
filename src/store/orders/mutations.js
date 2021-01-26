export default {
  /**
   * Adds a list of all orders
   */
  storeOrders(state, items = []) {
    state.orders = items
    state.hasOrders = true
  },

  /**
   * Adds a new order
   */
  addOrder(state, order) {
    state.orders.push(order)
  },

  /**
   * Modifies an existing order
   */
  updateOrder(state, order) {
    const index = state.orders.findIndex(o => o.id === order.id)
    // On specified index remove the specified number of records.
    // Optionally inserts new records at this position
    state.orders.splice(index, 1, order)
  },

  /**
   * Delete an order
   */
  deleteOrder(state, order) {
    const index = state.orders.findIndex(o => o.id === order.id)
    state.orders[index].isDeleted = false
  }
}
