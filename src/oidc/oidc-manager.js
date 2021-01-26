import Vue from 'vue'

export const getUserRoles = function() {
  if (Vue.prototype.$keycloak.authenticated) {
    return Vue.prototype.$keycloak.realmAccess.roles
  } else {
    return []
  }
}
