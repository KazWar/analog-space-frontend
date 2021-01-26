import { Customer, Order, InventoryItem, OrderItem } from '../../model'

export default {
  async editCustomer({ commit, dispatch }, id) {
    const customer = await dispatch('loadCustomer', id)
    if (customer) {
      commit('storeCustomer', customer)
    }
  },

  async newCustomer({ commit, dispatch }, initialData) {
    const customer = new Customer(initialData)
    commit('storeCustomer', customer)
  },

  async editOrder({ commit, dispatch }, id) {
    const order = await dispatch('loadOrder', id)
    if (order) {
      commit('storeOrder', order)
    }
  },

  async newOrder({ commit, dispatch }, initialData) {
    const order = new Order(initialData)
    commit('storeOrder', order)
  },

  async editItem({ commit, dispatch }, id) {
    const item = await dispatch('loadItem', id)
    if (item) {
      commit('storeItem', item)
    }
  },

  async newItem({ commit, dispatch }, initialData) {
    const item = new InventoryItem(initialData)
    commit('storeItem', item)
  },

  async editOrderItem({ commit, dispatch }, id) {
    const orderItem = await dispatch('loadOrderItem', id)
    if (orderItem) {
      commit('storeOrderItem', orderItem)
    }
  },

  async newOrderItem({ commit, dispatch }, initialData) {
    const orderItem = new OrderItem(initialData)
    commit('storeOrderItem', orderItem)
  }
}
