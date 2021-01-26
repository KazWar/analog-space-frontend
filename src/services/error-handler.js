import Vue from 'vue'
import { Store } from '../store'

/**
 * Global error handler for client-side
 */
async function clientErrorHandler(error) {
  try {
    if (!Store.state.ui.error) {
      await Store.dispatch('handleError', error)
    }
  } catch (error) {
    console.log("Now that's unheard of, an error within the error handler !!!")
    console.error(error.toString())
  }
  return false
}

/**
 * Handler for errors within Vue components
 */
Vue.config.errorHandler = error => clientErrorHandler(error)

/**
 * Handler for errors outside Vue components
 */
window.onerror = (msg, url, line, col, error) => clientErrorHandler(error)

/**
 * Handler for unhandled promise rejections
 */
window.addEventListener('unhandledrejection', event =>
  clientErrorHandler(event.reason)
)
