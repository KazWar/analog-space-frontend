import Vue from 'vue'
import axios from 'axios'
import { Configuration } from '../configuration'

export const BaseService = new Vue({
  computed: {
    baseUrl() {
      return Configuration.baseUrl
    }
  },

  methods: {
    getRequestOptions(url, method, data, params, customHeaders = {}) {
      const headers = {
        ...customHeaders,
        'Content-Type': 'application/json'
      }

      return {
        url: this.baseUrl + url,
        method,
        data,
        params,
        headers
      }
    },

    handleError(url, method, error) {
      console.error(`Error executing request ${method} ${url}`)

      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */

        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      }

      throw new Error('Error executing request')
    },

    async request(url, method, data, params, headers) {
      const options = this.getRequestOptions(url, method, data, params, headers)
      try {
        const response = await axios(options)
        if (response.status === 200) {
          return response.data
        }
      } catch (error) {
        this.handleError(url, method, error)
      }
    }
  }
})
