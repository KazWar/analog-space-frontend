<script>
import CustomersTable from 'components/customers-table'

export default {
  name: 'Customers',
  components: {
    CustomersTable
  }
}
</script>

<template>
  <q-page class="flex">
    <div class="customers">
      <customers-table></customers-table>
    </div>
  </q-page>
</template>

<style>
.customers {
  width: 100%;
  height: 100%;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
