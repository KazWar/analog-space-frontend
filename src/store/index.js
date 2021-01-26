import Vue from 'vue'
import Vuex from 'vuex'

import ui from './ui'
import orders from './orders'
import customers from './customers'
import dialog from './dialog'
import inventory from './inventory'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export let Store

export default function(/* { ssrContext } */) {
  Store = new Vuex.Store({
    modules: {
      ui,
      orders,
      customers,
      dialog,
      inventory
    },
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })
  return Store
}
