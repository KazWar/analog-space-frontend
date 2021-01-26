import { CustomerService, OrderService } from '../../services'
import { Customer } from 'src/model'

export default {
  async loadOrders({ commit, dispatch }) {
    const { data, success, errors } = await OrderService.getOrders()
    if (success) {
      commit('storeOrders', data)
    } else {
      dispatch('handleError', errors.join(', '))
    }
  },

  async loadOrder({ state }, id) {
    return state.orders.find(c => c.id === id)
  },

  async createOrder({ commit, dispatch }, { order, customer }) {
    dispatch('saveCustomer', customer)

    const { data, success, errors } = await OrderService.createOrder(order)
    if (success) {
      commit('addOrder', data.order)
    } else {
      dispatch('handleError', errors.join(', '))
    }
  },

  /**
   * Saves an order - updating an existing order or creating a new one
   */
  async saveOrder({ commit, dispatch }, { order }) {
    if (!order) throw new Error('Order is required')
    if (!order.customerId) throw new Error('Order customer is required')
    // TODO:
    // if (!order.inventory) throw new Error('Order inventory are required')
    // if (order.inventory.length === 0) throw new Error('Order inventory cannot be empty')

    // Save the order
    let result
    if (order.id) {
      result = await OrderService.updateOrder(order)
      if (result.success) {
        // Dirty trick to preserve the items, as they're not yet saved
        result.data.items = order.items
        order = result.data
        commit('updateOrder', order)
      }
    } else {
      result = await OrderService.createOrder(order)
      if (result.success) {
        // Dirty trick to preserve the items, as they're not yet saved
        result.data.items = order.items
        order = result.data
        commit('addOrder', order)
      }
    }

    for (const item of order.items) {
      // TODO: Save order inventory linked to the order
    }

    const { success, errors } = result
    if (!success) {
      dispatch('handleError', errors.join(', '))
    }
  }
}
