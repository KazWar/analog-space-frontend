<script>
import { Store } from '../store'

export default {
  name: 'CriticalError',
  data() {
    return {
      error: null,
      detailsVisible: false
    }
  },

  methods: {
    showDetails() {
      this.detailsVisible = true
    }
  },

  created() {
    this.error = Store.state.ui.error
    Store.dispatch('clearError')
  }
}
</script>

<template>
  <q-page class="flex flex-center stripped-background">
    <div class="text-white text-center q-pa-md flex flex-center">
      <div>
        <div style="font-size: 20vh">Critical Error</div>
        <div style="background-color: whitesmoke">
          <div class="text-h5 text-bold text-black" style="opacity: 0.7">
            <div class="details">
              {{ error ? error.toString() : 'Unknown error' }}
            </div>
          </div>
        </div>

        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="red"
          unelevated
          to="/"
          label="Go Home"
          no-caps
        />
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.stripped-background {
  color: $red;

  background: repeating-linear-gradient(
    45deg,
    $red-7,
    $red-7 20px,
    $red-5 20px,
    $red-5 40px
  );
}
</style>
