<template>
  <q-drawer
    v-model="mainDrawerState"
    content-class="background-1"
    side="left"
    elevated
  >
    <q-list>
      <q-item
        clickable
        active-class="text-primary"
        tag="a"
        to="/"
        style="padding-top: 15px; padding-bottom: 15px"
        class="background-2 primary"
      >
        <q-item-section avatar>
          <q-icon name="home" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">HOME</q-item-label>
          <q-item-label caption class="text-bold">
            Quick overview
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item
          clickable
          active-class="text-primary"
          tag="a"
          to="/insights"
          style="padding-top: 15px; padding-bottom: 15px"
          class="background-2 primary"
      >
        <q-item-section avatar>
          <q-icon name="search" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">Website/Product Insights</q-item-label>
          <q-item-label caption class="text-bold">
            More detailed view
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable active-class="text-primary" tag="a" to="/transactions"
              style="padding-top: 15px; padding-bottom: 15px"
              class="background-2 primary">
        <q-item-section avatar>
          <q-icon name="assignment_ind" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold"> Customers Insights </q-item-label>
          <q-item-label caption>Know more about your clients</q-item-label>
        </q-item-section>
      </q-item>

      <q-item-label
        class="q-item-label background-4 text-black text-bold"
        caption
      >
        Pages
      </q-item-label>

      <q-item active-class="text-primary" clickable tag="a" to="/customers">
        <q-item-section avatar>
          <q-icon name="people" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold"> Customers </q-item-label>
          <q-item-label caption>List of all customers</q-item-label>
        </q-item-section>
      </q-item>



      <q-item clickable active-class="text-primary" tag="a" to="/orders">
        <q-item-section avatar>
          <q-icon name="assignment" color="primary"> </q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold">
            Orders
            <!--            <q-badge color="negative" class="text-white text-bold"> 1 </q-badge>-->
          </q-item-label>
          <q-item-label caption>Manage orders</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable active-class="text-primary" tag="a" to="/inventory">
        <q-item-section avatar>
          <q-icon name="view_list" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold"> Inventory </q-item-label>
          <q-item-label caption>See the current inventory</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
          clickable
          active-class="text-primary"
          class="primary"
          tag="a"
          to="/user"
      >
        <q-item-section avatar>
          <q-icon name="lock" color="primary"> </q-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-bold"> User Information </q-item-label>
          <q-item-label caption> Authentication functionality </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="admin_panel_settings" color="primary">
            <q-tooltip
                :delay="1000"
                content-class="bg-primary text-bold text-subtitle1"
                anchor="center right"
                self="center left"
                :offset="[10, 10]"
                transition-show="jump-right"
                transition-hide="jump-left"
            >
              Only gemini-admins can see this
            </q-tooltip>
          </q-icon>
        </q-item-section>
      </q-item>
    </q-list>
    <br />

    <q-item class="fixed-bottom background-2">
      <q-item-section class="text-center">
        <q-item-label class="text-bold"> WORK IN PROGRESS </q-item-label>
      </q-item-section>
    </q-item>
  </q-drawer>
</template>

<script>
export default {
  name: 'MainDrawer',
  data() {
    return {}
  },
  computed: {
    mainDrawerState: {
      get() {
        return this.$store.state.ui.mainDrawer
      },
      set() {}
    }
  },
  mounted() {}
}
</script>

<style lang="sass">
.q-item-label
  color: white
  font-weight: bold
  font-size: 11pt
  padding-top: 7px
  padding-bottom: 7px
  padding-left: 15px


// Toggle
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap')

*
  box-sizing: border-box

.checkbox
  opacity: 0
  position: absolute

.label
  border-radius: 50px
  cursor: pointer
  display: flex
  align-items: center
  justify-content: space-between
  padding: 5px
  position: relative
  height: 26px
  width: 50px
  transform: scale(1.5)

.label .ball
  background-color: #fff
  border-radius: 50%
  position: absolute
  top: 2px
  left: 2px
  height: 22px
  width: 22px
  transform: translateX(0px)
  transition: transform 0.2s linear

.checkbox:checked + .label .ball
  transform: translateX(24px)
</style>
