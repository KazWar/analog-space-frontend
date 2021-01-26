<script>
import OrdersTable from 'components/orders-table'

export default {
  name: 'Orders',
  components: {
    OrdersTable
  }
}
</script>

<template>
  <q-page class="flex">
    <div class="orders">
      <orders-table> </orders-table>
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
