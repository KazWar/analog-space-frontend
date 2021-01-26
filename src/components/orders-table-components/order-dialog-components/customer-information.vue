<script>
export default {
  name: 'customer-information',
  props: {
    // Edited customer
    customer: {
      required: true
    }
  }
}
</script>

<template>
  <q-card-section class="test" horizontal>
    <q-card-section class="customer-information-section-left">
      <q-input
        stack-label
        readonly
        label="First name"
        v-model="customer.firstName"
      />
      <q-input
        stack-label
        readonly
        type="email"
        label="E-mail"
        v-model="customer.email"
      />
      <q-input
        stack-label
        readonly
        label="Country"
        v-model="customer.country"
      />

      <q-input
        stack-label
        readonly
        label="City"
        v-model="customer.city"
      ></q-input>
      <q-input stack-label readonly label="Street" v-model="customer.street" />
    </q-card-section>
    <q-card-section class="customer-information-section-right">
      <q-input
        stack-label
        readonly
        label="Last name"
        v-model="customer.lastName"
      />
      <q-input
        readonly
        stack-label
        label="Phone number"
        v-model="customer.phoneNumber"
      />
      <q-input
        readonly
        stack-label
        label="Province"
        v-model="customer.province"
      ></q-input>

      <q-input
        readonly
        stack-label
        label="Postal code"
        v-model="customer.zipCode"
      ></q-input>
      <q-input
        readonly
        stack-label
        label="House No"
        v-model="customer.streetNr"
      />
    </q-card-section>
  </q-card-section>
</template>

<style scoped>
.customer-information-section-left {
  padding-right: 5px;
  padding-left: 10px;
}

.customer-information-section-right {
  padding-left: 2px;
  padding-right: 5px;
}
</style>
