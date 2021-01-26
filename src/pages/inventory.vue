<script>
import InventoryTable from 'components/inventory-table'

export default {
  name: 'Inventory',
  components: {
    InventoryTable
  }
}
</script>

<template>
  <q-page class="flex">
    <div class="orders">
      <inventory-table> </inventory-table>
    </div>
  </q-page>
</template>

<style>
.orders {
  width: 100%;
  height: 100%;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
