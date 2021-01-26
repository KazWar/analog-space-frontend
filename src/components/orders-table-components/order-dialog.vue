<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import OrderInformation from './order-dialog-components/order-information'
import CustomerInformation from './order-dialog-components/customer-information'
import OrderItems from './order-dialog-components/order-items'

export default {
  name: 'order-dialog',
  props: ['orderId'],
  components: {
    OrderInformation,
    CustomerInformation,
    OrderItems
  },

  data() {
    return {
      jobType: null,
      editedOrder: null
    }
  },

  computed: {
    ...mapState({
      order: state => state.dialog.orderDialog.order,
      customers: state => state.customers.customers
    }),

    ...mapGetters(['editingNewOrder', 'editingExistingOrder'])
  },

  methods: {
    ...mapActions(['saveOrder']),

    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.editedOrder = this.order.clone()
      this.$refs.dialog.show()
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide()
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hide')
    },

    async onOKClick() {
      let order = this.saveOrder({ order: this.editedOrder })

      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit('ok')
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide()
    },

    onCancelClick() {
      // we just need to hide dialog
      this.hide()
    },

    // Triggered when customer has been selected in the dropdown.
    // Assign that customer to the order, so that his details
    // are displayed
    customerSelected(id) {
      this.editedOrder.customer = this.customers.find(c => c.id === id)
    }
  }
}
</script>

<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="order-dialog" v-if="editedOrder">
      <q-card-section horizontal>
        <!--  Order data      -->
        <order-information :order="editedOrder"></order-information>
        <q-separator vertical></q-separator>
        <!--  Customer data      -->

        <div class="column">
          <q-select
            label="Select a customer"
            v-model="editedOrder.customerId"
            :options="customers"
            stack-label
            option-label="fullName"
            option-value="id"
            emit-value
            map-options
            @input="id => customerSelected(id)"
          />

          <customer-information :customer="editedOrder.customer" />
        </div>
      </q-card-section>

      <order-items :order="editedOrder" />

      <q-card-actions align="right">
        <q-btn color="primary" label="Save" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style>
.order-dialog {
  width: 700px;
  /* Force the dialog to the chosen width. */
  min-width: 700px;
  height: 900px;
  padding-top: 10px;
}
</style>
