import VueKeyCloak from '@dsb-norge/vue-keycloak-js'
import axios from 'axios'

export default async ({ Vue }) => {
  function tokenInterceptor(keycloak) {
    axios.interceptors.request.use(
      config => {
        config.headers.Authorization = `Bearer ${keycloak.token}`
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
  }

  return new Promise(resolve => {
    Vue.use(VueKeyCloak, {
      init: {
        onLoad: 'login-required',
        checkLoginIframe: false
      },
      config: {
        realm: 'gemini',
        url: 'https://auth.analogspace.net/auth',
        clientId: 'gemini-ui'
      },
      // Disabled for now
      // login: {
      //   redirectUri: "https://localhost:8080/"
      // },
      // logout: {
      //   redirectUri: "https://localhost:8080/"
      // },
      onReady(keycloak) {
        tokenInterceptor(keycloak)
        resolve()
      }
    })
  })
}
