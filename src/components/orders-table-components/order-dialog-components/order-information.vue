<script>
import {
  OrderType,
  OrderTypeNames,
  OrderStatus,
  OrderStatusNames,
  OrderSubStatus,
  OrderSubStatusNames
} from 'src/model/order'

export default {
  name: 'order-information',
  props: {
    // Edited order
    order: {
      required: true
    }
  },
  data() {
    return {
      date: null,
      jobTypeOptions: Object.values(OrderType).map(value => ({
        label: OrderTypeNames[value],
        value
      })),
      OrderStatusOptions: Object.values(OrderStatus).map(value => ({
        label: OrderStatusNames[value],
        value
      })),
      OrderSubStatusOptions: Object.values(OrderSubStatus).map(value => ({
        label: OrderSubStatusNames[value],
        value
      }))
    }
  }
}
</script>

<template>
  <q-card-section horizontal>
    <q-card-section class="order-data-section-left">
      <q-input
        stack-label
        label="Order number"
        v-model="order.id"
        readonly
      ></q-input>
      <q-select
        v-model="order.orderStatus"
        :options="OrderStatusOptions"
        stack-label
        label="status"
        value="0"
        emit-value
        map-options
      ></q-select>
      <q-select
        v-model="order.orderType"
        :options="jobTypeOptions"
        stack-label
        label="Job type"
        emit-value
        map-options
      >
      </q-select>
    </q-card-section>
    <q-card-section class="order-data-section-right">
      <q-input
        stack-label
        readonly
        label="Token id"
        v-model="order.token"
      ></q-input>
      <q-select
        v-model="order.orderSubStatus"
        :options="OrderSubStatusOptions"
        :readonly="order.orderStatus !== 3"
        stack-label
        label="Sub-status"
        emit-value
        map-options
      ></q-select>
      <q-input stack-label label="Order due-date" v-model="order.orderDueDate"
        ><template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy>
              <q-date v-model="order.orderDueDate"></q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </q-card-section>
  </q-card-section>
</template>

<style>
.order-data-section-left {
  padding-right: 5px;
  padding-left: 10px;
}

.order-data-section-right {
  padding-left: 2px;
  padding-right: 10px;
}
</style>
