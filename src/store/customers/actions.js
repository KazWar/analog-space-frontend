import { CustomerService } from '../../services'

export default {
  /**
   * Loads all the customers from the API into the customers store
   */
  async loadCustomers({ commit, dispatch }) {
    const { data, success, errors } = await CustomerService.getCustomers()
    if (success) {
      commit('storeCustomers', data)
    } else {
      dispatch('handleError', errors.join(', '))
    }
  },

  /**
   * Finds and returns a customer from the store by Id
   */
  async loadCustomer({ state }, id) {
    return state.customers.find(c => c.id === id)
  },

  /**
   * This action either:
   * Updates a customer in the API and saves the updated customer in the store.
   * Creates a new customer through the API and saves the new customer in the store.
   */
  async saveCustomer({ commit, dispatch }, customer) {
    let result

    if (customer.id) {
      result = await CustomerService.updateCustomer(customer)
      if (result.success) commit('updateCustomer', result.data)
    } else {
      result = await CustomerService.createCustomer(customer)
      if (result.success) commit('addCustomer', result.data)
    }

    return result.data

    const { success, errors } = result
    if (!success) {
      dispatch('handleError', errors.join(', '))
    }
  }
}
