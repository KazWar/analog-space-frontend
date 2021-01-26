<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import CustomerInformation from './customer-dialog-components/customer-information'

export default {
  name: 'customer-dialog',
  props: ['customerId'],
  components: {
    CustomerInformation
  },

  data() {
    return {
      editedCustomer: null
    }
  },

  computed: {
    ...mapState({
      customer: state => state.dialog.customerDialog.customer
    }),

    ...mapGetters(['editingNewCustomer', 'editingExistingCustomer']),

    customerName() {
      return this.customer.firstName + ' ' + this.customer.lastName
    },

    selectedComponent: function() {
      return this.dialogComponent
    }
  },

  methods: {
    ...mapActions(['saveCustomer']),

    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.editedCustomer = this.customer.clone()
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

    onOKClick() {
      this.saveCustomer(this.editedCustomer)

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
    }
  }
}
</script>

<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="customer-dialog">
      <div class="customer-dialog-name">
        {{ editingNewCustomer ? 'New customer' : 'Editing ' + customerName }}
      </div>

      <q-card-section horizontal>
        <!--  InventoryItem data -->
        <customer-information :customer="editedCustomer"></customer-information>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" label="Save" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style>
.customer-dialog {
  width: 600px;
  /* Force the dialog to the chosen width. */
  min-width: 600px;
  height: 400px;
}

.customer-dialog-name {
  font-family: Roboto, serif;
  font-size: x-large;
  font-weight: bold;
  padding-left: 10px;
  background-color: whitesmoke;
}
</style>
