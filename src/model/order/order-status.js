export const OrderStatus = {
  // Default status for all new orders
  New: 1,

  // Order is currently being worked on
  Progress: 2,

  // Order is delayed for any reason
  Hold: 3,

  // Order is finished
  Finished: 4
}

export const OrderStatusNames = {
  [OrderStatus.New]: 'New',
  [OrderStatus.Progress]: 'In progress',
  [OrderStatus.Hold]: 'On hold',
  [OrderStatus.Finished]: 'finished'
}
