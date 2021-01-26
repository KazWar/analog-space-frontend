export function handleError(state, error) {
  state.error = error
  console.error(error)
}

export function clearError(state, error) {
  state.error = null
}

export function setMainDrawer(state, value) {
  state.mainDrawer = value
}

export function setUserDrawer(state, value) {
  state.userDrawer = value
}
