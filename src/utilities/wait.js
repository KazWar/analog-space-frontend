/**
 * Async wait
 * @param delay Wait delay in milliseconds
 */
export function wait(delay) {
  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve()
    }, delay)
  })
}
