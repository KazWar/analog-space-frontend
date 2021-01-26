export default {
  getNewCustomerById: state => id => {
    return state.customerDialog.customer.find(todo => todo.id === id)
  },

  getTempCustomerById: state => id => {
    return state.customerDialog.customer.find(todo => todo.id === id)
  },

  // Indicates that we're editing a new order
  editingNewOrder: state => (state.orderDialog.order || {}).id == null,

  // Indicates that we're editing an existing order
  editingExistingOrder: state => (state.orderDialog.order || {}).id != null,

  // Indicates that we're editing a new customer
  editingNewCustomer: state => (state.customerDialog.customer || {}).id == null,

  editingNewItem: state => (state.orderDialog.item || {}).id == null,

  editingExistingItem: state => (state.orderDialog.item || {}).id == null,

  editingNewOrderItem: state => (state.orderDialog.orderItem || {}).id == null,

  editingExistingOrderItem: state =>
    (state.orderDialog.orderItem || {}).id == null,

  // Indicates that we're editing an existing customer
  editingExistingCustomer: state =>
    (state.customerDialog.customer || {}).id != null
}
