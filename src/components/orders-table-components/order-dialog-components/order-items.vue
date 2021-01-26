<script>
import { mapState } from 'vuex'
import { OrderItem } from '../../../model'

export default {
  props: {
    // Edited order
    order: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState({
      inventoryItems: state => state.inventory.items
    }),

    // Example of a computed property which takes a parameter.
    // It needs to return a FUNCTION receiving that parameter,
    // and inside that function you evaluate the result.
    inventoryItem() {
      return id => this.inventoryItems.find(item => item.id === id) || {}
    }
  },

  methods: {
    // Adds inventory item
    addItem() {
      this.order.items.push(new OrderItem())
    },

    // Deletes inventory item
    deleteItem(item) {
      const index = this.order.items.indexOf(item)
      if (index !== -1) {
        this.order.items.splice(index, 1)
      }
    },

    // When an item is picked, changes the item.price to match the value off the item in the inventory.
    changed(id, item) {
      item.price = this.inventoryItem(id).price
    }
  }
}
</script>

<template>
  <div class="column">
    <q-markup-table class="order-items" flat square bordered dense>
      <thead>
        <th>
          Product or service
        </th>
        <th>
          Quantity
        </th>
        <th>
          Price
        </th>
        <th>
          Total
        </th>
        <th></th>
      </thead>

      <tbody>
        <tr class="order-item" v-for="item of order.items" :key="item.id">
          <td>
            <q-select
              class="select-inventory-item"
              label="Select a product or service"
              v-model="item.inventoryItemId"
              :options="inventoryItems"
              dense
              stack-label
              option-label="name"
              option-value="id"
              emit-value
              map-options
              @input="changed(item.inventoryItemId, item)"
            />
          </td>

          <td>
            <q-input
              dense
              v-model="item.quantity"
              type="number"
              min="0"
              max="99999999"
            />
          </td>

          <td>
            <q-input dense v-model="item.price" min="0" max="99999999" />
          </td>

          <td>
            <q-input dense :value="item.total" readonly type="number" />
          </td>

          <td>
            <q-btn
              icon="close"
              size="xs"
              flat
              round
              dense
              @click="deleteItem(item)"
            />
          </td>
        </tr>
      </tbody>
    </q-markup-table>

    <footer class="row q-pt-md">
      <q-btn icon="add" label="Add item" flat round dense @click="addItem" />
      <q-space />
      <span class="order-total"> Order total: {{ order.total }} € </span>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.select-inventory-item {
  width: 200px;
}

.order-total {
  padding-right: 10px;
}

.order-items {
  th {
    text-align: left;
  }
}
</style>
