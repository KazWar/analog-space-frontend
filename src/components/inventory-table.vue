<script>
import { mapState } from 'vuex'

export default {
  name: 'inventoryTable',
  data() {
    return {
      columns: [
        {
          name: 'id',
          required: true,
          label: 'Order number',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          sortable: true
        },
        {
          name: 'quantity',
          label: 'Quantity',
          field: row => row.quantity,
          align: 'left'
        },
        {
          name: 'price',
          label: 'Price',
          field: row => row.price,
          align: 'left'
        },
        {
          name: 'unit',
          label: 'Unit',
          field: row => row.unit,
          align: 'left'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      inventory: state => state.inventory.items
    })
  }
}
</script>

<template>
    <q-table
      class="ordersTable"
      title="Orders"
      :data="inventory"
      :columns="columns"
      no-data-label="I didn't find anything for you"
      row-key="name"
    />
</template>

<style>
.ordersTable {
  width: 100%;
  height: 100%;
}

.newOrderButton {
  margin-left: 5px;
}
</style>
