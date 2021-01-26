import { Customer } from '../customer'
import { OrderStatus } from './order-status'
import { OrderType } from './order-type'
import { OrderSubStatus } from './order-sub-status'
import { OrderItem } from '../order-item'

export class Order {
  constructor(data = {}) {
    this.orderType = OrderType.Lab
    this.orderStatus = OrderStatus.New
    this.orderSubStatus = OrderSubStatus.None
    this.orderDate = new Date()
    this.orderDueDate = new Date(new Date().getTime() + 7 * 24 * 3600 * 1000)
    this.customer = new Customer()
    this.items = [new OrderItem()]

    Object.assign(this, data)
  }

  // Order id
  id

  // What type of order this is.
  orderType

  // The current status of the order.
  orderStatus

  // The sub-status of the order. If OrderStatus is 'Hold', then reason is shown, otherwise it's null.
  orderSubStatus

  // Date and time of the order. Not implemented yet in API
  token

  // When the order is due.
  orderDueDate

  // Who's order this is
  customerId
  customer

  // Order items
  items

  get total() {
    return this.items.reduce((sum, item) => {
      sum += item.total
      return sum
    }, 0)
  }

  clone() {
    const data = JSON.parse(JSON.stringify(this))
    return new Order({
      ...data,
      customer: new Customer(data.customer),
      items: (data.items || []).map(item => new OrderItem(item))
    })
  }
}
