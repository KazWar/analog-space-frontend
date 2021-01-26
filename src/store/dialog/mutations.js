export default {
  storeCustomer(state, customer) {
    state.customerDialog.customer = customer
  },

  storeOrder(state, order) {
    state.orderDialog.order = order
  },

  storeItem(state, item) {
    state.orderDialog.item = item
  },

  storeOrderItem(state, orderItem) {
    state.orderDialog.orderItem = orderItem
  }
}
