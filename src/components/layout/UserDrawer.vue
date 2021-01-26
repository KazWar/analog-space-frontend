<template>
  <q-drawer
    v-model="userDrawerState"
    side="right"
    content-class="background-1"
    overlay
    elevated
  >
    <q-card dark square class="q-ma bg-primary" v-if="userInfo !== null">
      <q-card-section>
        <div class="text-h6 text-grey-4">
          Welcome: <b class="text-white">{{ userInfo.first_name }}</b>
        </div>
        <div class="text-subtitle2 text-grey-4">
          Full name: <b class="text-white">{{ userInfo.name }}</b>
        </div>
        <div class="text-subtitle2 text-grey-4">
          Email: <b class="text-white">{{ userInfo.email }}</b>
        </div>
      </q-card-section>
    </q-card>
    <q-list no-border link class="background-2">
      <div class="background-4" style="height: 2px"></div>
      <q-item clickable v-ripple @click="gotoAccountManagement()">
        <q-item-section>
          <q-item-label>ACCOUNT SETTINGS</q-item-label>
        </q-item-section>
      </q-item>
      <div class="background-4" style="height: 2px"></div>
      <q-item clickable v-ripple @click="logOutUser()">
        <q-item-section>
          <q-item-label>LOG OUT</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  name: 'UserDrawer',
  data() {
    return {
      userInfo: null,
      accountManagementUrl: null
    }
  },
  computed: {
    userDrawerState: {
      get() {
        return this.$store.state.ui.userDrawer
      },
      set() {}
    }
  },
  mounted() {
    this.loadUserInfo()

    // Get acc management URL
    this.accountManagementUrl = this.$keycloak.createAccountUrl()
  },
  methods: {
    loadUserInfo() {
      // Use the keycloak module to get the user info
      this.$keycloak
        .loadUserInfo()
        .success(userInfo => {
          this.userInfo = userInfo
        })
        .error(error => {
          // Notify with the error
          this.$q.notify({
            color: 'negative',
            message:
              error.response.data.message + ' - ' + error.response.data.error,
            icon: 'report_problem'
          })
        })
    },
    gotoAccountManagement() {
      // Update URL
      this.accountManagementUrl = this.$keycloak.createAccountUrl()
      // Open a new tab with the account management URL
      window.open(this.accountManagementUrl, '_blank')
    },
    logOutUser() {
      this.$keycloak.logoutFn()
    }
  }
}
</script>

<style scoped></style>
