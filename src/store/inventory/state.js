import { InventoryItem, InventoryItemCategory } from '../../model'

/**
 * This store contains inventory items
 */

export default {
  hasItems: false,
  items: [
    new InventoryItem({
      id: 1,
      category: InventoryItemCategory.Film,
      name: 'Rollei RPX 200',
      quantity: 50,
      unit: 'pcs',
      price: 5.5
    }),
    new InventoryItem({
      id: 2,
      category: InventoryItemCategory.Film,
      name: 'Rollei RPX 400',
      quantity: 50,
      unit: 'pcs',
      price: 5.3
    }),
    new InventoryItem({
      id: 3,
      category: InventoryItemCategory.Film,
      name: 'Ilford Delta 100',
      quantity: 20,
      unit: 'pcs',
      price: 6.2
    }),
    new InventoryItem({
      id: 4,
      category: InventoryItemCategory.Chemicals,
      name: 'Film Developer Rodinal A09',
      quantity: 2,
      unit: '500 ml',
      price: 12.0
    }),
    new InventoryItem({
      id: 5,
      category: InventoryItemCategory.Chemicals,
      name: 'Ilford Rapid Fixer',
      quantity: 2,
      unit: '1 l',
      price: 15.5
    }),
    new InventoryItem({
      id: 6,
      category: InventoryItemCategory.Service,
      name: 'Film Scanning',
      price: 3.5
    }),
    new InventoryItem({
      id: 6,
      category: InventoryItemCategory.Service,
      name: 'Film Push/Pull',
      price: 2.0
    })
  ]
}
