export default {
  /**
   * Adds a list of all Customers
   */
  storeCustomers(state, items = []) {
    state.customers = items
    state.hasCustomers = true
  },

  /**
   * Adds a new InventoryItem
   */
  addCustomer(state, customer) {
    state.customers.push(customer)
  },

  /**
   * Modifies an existing InventoryItem
   */
  updateCustomer(state, customer) {
    const index = state.customers.findIndex(c => c.id === customer.id)
    // On specified index remove the specified number of records.
    // Optionally inserts new records at this position
    state.customers.splice(index, 1, customer)
  },

  /**
   * Delete an InventoryItem
   */
  deleteCustomer(state, customer) {
    const index = state.customers.findIndex(c => c.id === customer.id)
    state.customers[index].isDeleted = false
  }
}
