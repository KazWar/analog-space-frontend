<script>
import { mapState, mapActions } from 'vuex'
import customerDialog from './customers-table-components/customer-dialog'

export default {
  name: 'customersTable',
  methods: {
    ...mapActions(['editCustomer', 'newCustomer']),

    async newCustomerDialog() {
      await this.newCustomer()

      this.$q
        .dialog({
          component: customerDialog,
          parent: this,
          dialogComponent: 'CustomerInformationNew'
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

    async editCustomerDialog(evt, row) {
      await this.editCustomer(row.id)

      this.$q
        .dialog({
          component: customerDialog,
          parent: this,
          customerId: row.id,
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
          label: 'InventoryItem id',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'firstName',
          align: 'center',
          label: 'First name',
          field: 'firstName',
          sortable: true
        },
        {
          name: 'lastName',
          label: 'Last name',
          field: 'lastName',
          sortable: true
        },
        {
          name: 'email',
          label: 'E-mail',
          field: 'email'
        },
        {
          name: 'phoneNumber',
          label: 'Phone number',
          field: 'phoneNumber'
        },
        {
          name: 'country',
          label: 'Country',
          field: 'country'
        },
        {
          name: 'province',
          label: 'Province',
          field: 'province'
        },
        {
          name: 'city',
          label: 'City',
          field: 'city'
        },
        {
          name: 'zipCode',
          label: 'Zip code',
          field: 'zipCode'
        },
        {
          name: 'street',
          label: 'Street',
          field: 'street'
        },
        {
          name: 'streetNr',
          label: 'Street #',
          field: 'streetNr'
        }
      ],
      // Why can't I bind my customer to here?
      data: [],
      selectedCustomer: null,
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
      customers: state => state.customers.customers
    })
  }
}
</script>

<template>
    <q-table
      class="customersTable"
      title="Customers"
      :pagination="initialPagination"
      :data="this.customers"
      :columns="columns"
      :filter="filter"
      no-data-label="I didn't find anything for you"
      row-key="name"
      @row-click="editCustomerDialog"
    >
      <template v-slot:top>
        <q-btn
          class="newCustomerButton"
          align="right"
          color="primary"
          size="md"
          label="Add customer"
          @click="newCustomerDialog"
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
.customersTable {
  width: 100%;
  height: 100%;
}

.newCustomerButton {
  margin-left: 5px;
}
</style>
