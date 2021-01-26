export const OrderSubStatus = {
  // Default status for all new orders
  PaymentMissing: 1,

  // Order is delayed for any reason
  StockMissing: 2,

  // Order is currently being worked on
  MaterialMissing: 3,

  // Order is finished
  Other: 4,

  // Default status for all new orders
  None: 5
}

export const OrderSubStatusNames = {
  [OrderSubStatus.None]: 'None',
  [OrderSubStatus.PaymentMissing]: 'Payment missing',
  [OrderSubStatus.StockMissing]: 'Missing stock',
  [OrderSubStatus.MaterialMissing]: 'Material missing',
  [OrderSubStatus.Other]: 'Other'
}
