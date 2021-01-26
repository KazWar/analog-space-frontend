export const InventoryItemCategory = {
  Film: 1,
  Paper: 2,
  Chemicals: 3,
  Accessory: 4,
  Service: 5
}

export const InventoryItemCategoryName = {
  [InventoryItemCategory.Film]: 'Film',
  [InventoryItemCategory.Paper]: 'Paper',
  [InventoryItemCategory.Chemicals]: 'Chemicals',
  [InventoryItemCategory.Accessory]: 'Accessories',
  [InventoryItemCategory.Service]: 'Services'
}

export class InventoryItem {
  constructor(data = {}) {
    Object.assign(this, data)
  }

  id = null
  category = null
  barCode = null
  name = null
  ISO = null
  frameNumber = null
  format = null
  nativeProcess = null
  developmentTime = null
  developmentCost = null
  manufacturerName = null
  quantity = 0
  price = null
  unit = null

  clone() {
    const data = JSON.parse(JSON.stringify(this))
    return new InventoryItem(data)
  }
}
