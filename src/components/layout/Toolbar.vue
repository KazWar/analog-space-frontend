<script>
import { mapActions } from 'vuex'

export default {
  name: 'Toolbar',
  data() {
    return {}
  },
  mounted() {},
  methods: {
    ...mapActions(['toggleMainDrawer', 'toggleUserDrawer'])
  }
}
</script>

<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar class="q-toolbar">
      <q-toolbar-title shrink class="q-toolbar-title bg-asd">
        <div class="div-toolbar-name">
          <q-btn flat round icon="menu" @click="toggleMainDrawer" />

          <!--          <q-avatar>-->
          <!--            <img src="../../assets/logo-96x96.png" />-->
          <!--          </q-avatar>-->

          <span> Gemini Dashboard </span>
        </div>
      </q-toolbar-title>

      <q-separator dark vertical />

      <!-- actions -->
      <!--      <router-view name="actions"></router-view>-->

      <!-- space -->
      <q-space></q-space>

      <q-btn desnse flat round icon="account_box" @click="toggleUserDrawer" />
    </q-toolbar>
  </q-header>
</template>

<style scoped lang="sass">
.report-btn
  margin-right: 10px

.q-toolbar-title
  max-width: 299px
  width: 100%
  padding-left: 10px
  min-height: 50px

.q-toolbar
  padding-left: 0

span
  padding-left: 10px
  display: inline-block
  vertical-align: middle
  line-height: normal

.div-toolbar-name
  margin: 0
  position: absolute
  top: 50%
  -ms-transform: translateY(-50%)
  transform: translateY(-50%)
</style>
