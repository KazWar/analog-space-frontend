import { Store } from '../store'

const routes = [
  {
    path: '/',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('pages/home.vue')
      },
      {
        name: 'insights',
        path: 'insights',
        component: () => import('pages/business.vue')
      },
      {
        name: 'transactions',
        path: 'transactions',
        component: () => import('pages/transactions.vue')
      },
      {
        name: 'inventory',
        path: 'inventory',
        component: () => import('pages/inventory.vue')
      },
      {
        name: 'user',
        path: 'user',
        component: () => import('pages/user-information.vue')
      },
      {
        name: 'customers',
        path: 'customers',
        component: () => import('pages/customers.vue'),

        async beforeEnter(to, from, next) {
          await Store.dispatch('loadCustomers')
          next()
        }
      },
      {
        name: 'orders',
        path: 'orders',
        component: () => import('pages/orders.vue'),

        async beforeEnter(to, from, next) {
          await Store.dispatch('loadCustomers')
          await Store.dispatch('loadOrders')
          next()
        }
      },
      {
        name: 'error',
        path: '/error/:id',
        component: () => import('pages/error-critical.vue')
      }
    ]
  },
  {
    path: '*',
    component: () => import('layouts/BaseLayout.vue'),
    children: [
      {
        name: 'error404',
        path: '',
        component: () => import('pages/Error404.vue')
      }
    ]
  }
]

export default routes
