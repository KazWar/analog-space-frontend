import Vue from 'vue'
import { date } from 'quasar'
import { BaseService } from './base-service'
import { Customer, Order } from 'src/model'

export const OrderService = new Vue({
  mixins: [BaseService],

  methods: {
    /* Takes a order id and returns the specified order from the API.
     * Currently not functional due to absent API endpoint
     * */
    async getOrder(id) {
      let { success, data, errors } = await BaseService.request(
        '/customer/list',
        'get'
      )

      data = this.asOrder(result.data)

      return { success, data, errors }
    },

    /* Returns the all orders from the API. */
    async getOrders() {
      let { success, data, errors } = await BaseService.request(
        '/order/list',
        'get'
      )

      data = data.map(item => this.asOrder(item))
      return { success, data, errors }
    },

    async createOrder(order) {
      const dto = JSON.stringify(this.asDTO(order))

      let { success, data, errors } = await BaseService.request(
        '/order/add',
        'post',
        dto
      )
      data = this.asOrder(data)

      return { success, data, errors }
    },

    async updateOrder(order) {
      const id = order.id
      const dto = JSON.stringify(this.asDTO(order))

      let { success, data, errors } = await BaseService.request(
        `/order/update/${id}`,
        'put',
        dto
      )

      data = this.asOrder(data)

      return { success, data, errors }
    },

    /* Takes in an object and returns a Order object */
    asOrder(item) {
      if (item) {
        return new Order({
          id: item.id,
          orderType: item.order_type_id,
          orderStatus: item.order_status_id,
          orderSubStatus: item.order_sub_status_id,
          orderDueDate: item.deadline_at,
          customerId: item.customer_id,
          token: item.token
        })
      }
    },

    /* Maps a order instance into DTO expected by the API */
    asDTO(order) {
      if (order) {
        let orderDueDate = date.formatDate(
          order.orderDueDate,
          'DD-MM-YYYYTHH:mm:ss'
        )

        return {
          order_type_id: order.orderType,
          order_status_id: order.orderStatus,
          order_sub_status_id: order.orderSubStatus,
          deadline_at: orderDueDate,
          customer_id: order.customerId
        }
      }
    }
  }
})
