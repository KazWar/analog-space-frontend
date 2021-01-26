export default {
  getCustomerById: state => id => {
    return state.customers.find(c => c.id === id)
  }
}
