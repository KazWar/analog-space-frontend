import Vue from 'vue'
import { BaseService } from './base-service'
import { Customer, Order } from 'src/model'

export const CustomerService = new Vue({
  mixins: [BaseService],

  methods: {
    /* Takes a customer id and returns the specified customer from the API.
     * Currently not functional due to absent API endpoint
     * */
    async getCustomer(id) {
      let { success, data, errors } = await BaseService.request(
        '/customer/list/',
        'get'
      )

      return this.asCustomer(result.data)
    },

    /* Returns the all customers from the API. */
    async getCustomers() {
      let { success, data, errors } = await BaseService.request(
        '/customer/list',
        'get'
      )
      data = data.map(item => this.asCustomer(item))

      return { success, data, errors }
    },

    /* Takes a customer object and sends it to the API */
    async createCustomer(customer) {
      let dto = this.asDTO(customer)
      let { success, data, errors } = await BaseService.request(
        '/customer/add',
        'post',
        dto
      )
      data = this.asCustomer(data)

      return { success, data, errors }
    },

    /* Takes a customer object and sends it to the API */
    async updateCustomer(customer) {
      const id = customer.id
      const dto = JSON.stringify(this.asDTO(customer))

      let { success, data, errors } = await BaseService.request(
        `/customer/update/${id}`,
        'put',
        dto
      )

      data = this.asCustomer(data)

      return { success, data, errors }
    },

    /* Maps a DTO received from the API to a InventoryItem instance */
    asCustomer(item) {
      if (item) {
        return new Customer({
          id: item.id,
          firstName: item.first_name,
          lastName: item.last_name,
          email: item.email,
          phoneNumber: item.phone,
          country: item.country,
          province: item.province,
          city: item.city,
          zipCode: item.zip_code,
          street: item.street,
          streetNr: item.street_number
        })
      }
    },

    /* Maps a customer instance into DTO expected by the API */
    asDTO(customer) {
      if (customer) {
        return {
          first_name: customer.firstName,
          last_name: customer.lastName,
          email: customer.email,
          phone: customer.phoneNumber,
          country: customer.country,
          province: customer.province,
          city: customer.city,
          zip_code: customer.zipCode,
          street: customer.street,
          street_number: customer.streetNr
        }
      }
    }
  }
})
