<script>
import { date } from 'quasar'
import { mapState, mapActions, mapGetters } from 'vuex'
import orderDialog from './orders-table-components/order-dialog'
import {
  OrderStatusNames,
  OrderSubStatusNames,
  OrderTypeNames
} from 'src/model/order'

export default {
  name: 'ordersTable',
  methods: {
    ...mapActions([
      'editOrder',
      'newOrder',
      'editCustomer',
      'newCustomer',
      'editItem',
      'newItem',
      'editOrderItem',
      'newOrderItem',
      'loadOrderItem',
      'loadItem'
    ]),

    async newOrderDialog() {
      // Creates empty objects to fill
      await this.newCustomer()
      await this.newOrder()
      await this.newItem()
      await this.newOrderItem()

      this.$q
        .dialog({
          component: orderDialog,
          parent: this,
          text: 'something'
        })
        .onOk(() => {
          console.log('OK')
        })
        .onCancel(() => {
          console.log('Cancel')
        })
        .onDismiss(() => {
          console.log('Called on OK or Cancel')
        })
    },
    async editOrderDialog(evt, row) {
      await this.editOrder(row.id)
      await this.editCustomer(row.customerId)

      this.$q
        .dialog({
          component: orderDialog,
          parent: this,
          orderId: row.id,
          dialogComponent: 'CustomerInformationEdit'
        })
        .onOk(() => {
          console.log('OK')
        })
        .onCancel(() => {
          console.log('Cancel')
        })
        .onDismiss(() => {
          console.log('Called on OK or Cancel')
        })
    }
  },
  data() {
    return {
      filter: '',
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
          name: 'orderStatus',
          label: 'Status',
          align: 'left',
          field: 'orderStatus',
          format: val => `${OrderStatusNames[val]}`,
          sortable: true
        },
        {
          name: 'orderSubStatus',
          label: 'Sub-status',
          align: 'left',
          field: 'orderSubStatus',
          format: val => `${OrderSubStatusNames[val]}`,
          sortable: true
        },
        {
          name: 'orderType',
          label: 'Order type',
          align: 'left',
          field: 'orderType',
          format: val => `${OrderTypeNames[val]}`,
          sortable: true
        },
        {
          name: 'Token',
          label: 'token',
          align: 'left',
          field: 'token'
        },
        {
          name: 'orderDueDate',
          label: 'Order due date',
          format: val => date.formatDate(val, 'DD-MM-YYYY'),
          align: 'left',
          field: 'orderDueDate'
        },
        {
          name: 'customerId',
          label: 'Customer name',
          format: val => `${this.getCustomerById(val).fullName}`,
          align: 'left',
          field: 'customerId'
        }
      ],
      data: [],
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 20
      }
    }
  },
  computed: {
    ...mapState({
      orders: state => state.orders.orders
    }),

    ...mapGetters(['getCustomerById'])
  }
}
</script>

<template>
    <q-table
      class="ordersTable"
      title="Orders"
      :pagination="initialPagination"
      :data="this.orders"
      :columns="columns"
      :filter="filter"
      no-data-label="I didn't find anything for you"
      row-key="name"
      @row-click="editOrderDialog"
    >
      <template v-slot:top>
        <!--        <q-tabs>
          <q-tab
            name="newOrders"
            :filter="filter"
            icon="keyboard_tab"
            label="New"
          />
          <q-tab name="inProgressOrders" icon="autorenew" label="In progress" />
          <q-tab name="delayedOrders" icon="more_time" label="delayed" />
          <q-tab name="finishedOrders" icon="done" label="Finished" />
          <q-tab name="allOrders" icon="movie" label="All" />
        </q-tabs>-->
        <q-btn
          class="newOrderButton"
          align="right"
          color="primary"
          size="md"
          label="Add order"
          @click="newOrderDialog()"
        />
        <q-space />
        <q-input v-model="filter" dense debounce="300">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
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
