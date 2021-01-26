import Vue from 'vue'

// This can probably be replaced with Axios global defaults
export const Configuration = new Vue({
  computed: {
    baseUrl() {
      return 'https://gemini.analogspace.net/api'
    }
  }
})
