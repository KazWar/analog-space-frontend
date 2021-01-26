<script>
import MainDrawer from '../components/layout/MainDrawer'
import Toolbar from '../components/layout/Toolbar'
import UserDrawer from '../components/layout/UserDrawer'

export default {
  name: 'BaseLayout',
  components: { UserDrawer, Toolbar, MainDrawer },
  data() {
    return {}
  },
  mounted() {}
}
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <Toolbar></Toolbar>
    <MainDrawer></MainDrawer>
    <UserDrawer></UserDrawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-ajax-bar ref="bar" position="top" color="info" size="1px" />
  </q-layout>
</template>
