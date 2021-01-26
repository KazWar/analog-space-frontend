<template>
  <div id="q-app" v-if="renderApplication">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      renderApplication: false
    }
  },
  beforeMount() {
    if (this.$keycloak.ready) {
      this.renderApplication = true
    }
  },
  computed: {
    isKeycloakReady() {
      // This computed property has a watcher
      return this.$keycloak.ready
    }
  },
  watch: {
    isKeycloakReady: function(val) {
      if (val === true) {
        this.renderApplication = true
      }
    }
  }
}
</script>
