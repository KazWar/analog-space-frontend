export class OrderItem {
  constructor(data = {}) {
    Object.assign(this, data)
  }

  // Order-item Id
  id = null

  // Id of the order associated with the order items
  orderId = null

  // Id of the item associated with the order
  inventoryItemId = null

  // How much of the item are used in the order
  quantity = 1

  //
  price = 0

  get total() {
    return this.quantity * this.price
  }

  clone() {
    const data = JSON.parse(JSON.stringify(this))
    return new OrderItem(data)
  }
}
