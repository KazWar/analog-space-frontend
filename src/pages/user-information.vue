<template>
  <q-page style="width: 100%; padding: 20px">
    <h4 class="no-margin">USER INFORMATION</h4>

    <h4 class="no-margin text-primary" style="padding-top: 5px">General:</h4>
    <div v-if="userInfo !== null">
      <q-item style="padding: 0">
        <q-item-section avatar>
          <q-item-label overline class="text-info">USERNAME</q-item-label>
          <q-item-label>{{ userInfo.username }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label overline class="text-info">EMAIL</q-item-label>
          <q-item-label>{{ userInfo.email }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item style="padding: 0">
        <q-item-section avatar>
          <q-item-label overline class="text-info">FIRST NAME</q-item-label>
          <q-item-label>{{ userInfo.first_name }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label overline class="text-info">LAST NAME</q-item-label>
          <q-item-label>{{ userInfo.family_name }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item style="padding: 0">
        <q-item-section avatar>
          <q-item-label overline class="text-info">USER ID</q-item-label>
          <q-item-label>{{ userInfo.sub }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>

    <h4 class="no-margin text-primary" style="padding-top: 5px">User Roles:</h4>
    <div v-if="userRoles !== null">
      <q-chip
        color="primary"
        text-color="white"
        v-for="role in userRoles"
        :key="role"
      >
        <b>
          {{ role }}
        </b>
      </q-chip>
    </div>

    <h4 class="no-margin text-primary" style="padding-top: 5px">Token:</h4>
    <q-scroll-area style="height: 300px; width: 50%; margin-top: 5px;">
      <q-input
        standout
        style="width: 100%"
        v-model="FormattedToken"
        :dense="true"
        type="textarea"
        readonly
        autogrow
      />
    </q-scroll-area>

    <q-btn
      class="bg-primary text-white"
      label="COPY AUTH TOKEN"
      style="width: 50%; margin-top: 5px;"
      @click="onCopyClick()"
    ></q-btn>
  </q-page>
</template>

<script>
import { getUserRoles } from '../oidc/oidc-manager'
import { copyToClipboard } from 'quasar'

export default {
  name: 'UserInformation',
  data() {
    return {
      userRoles: null,
      userInfo: null
    }
  },
  mounted() {
    this.userRoles = getUserRoles()
    this.loadUserInfo()
  },
  computed: {
    // Token
    FormattedToken: {
      get: function() {
        // console.log(this.$keycloak);
        return 'Bearer ' + this.$keycloak.token
      }
    }
  },
  methods: {
    loadUserInfo() {
      // Use the keycloak module to get the user info
      this.$keycloak
        .loadUserInfo()
        .success(userInfo => {
          this.userInfo = userInfo
          console.log(userInfo)
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

    onCopyClick() {
      copyToClipboard(this.FormattedToken)
        .then(() => {
          this.$q.notify({
            color: 'positive',
            message: 'The Auth Token has been copied to your clipboard!',
            icon: 'content_paste'
          })
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            message: "Error! Couldn't copy Auth Token to your clipboard!",
            icon: 'content_paste'
          })
        })
    }
  }
}
</script>
