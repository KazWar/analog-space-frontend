<template>
  <q-page class="flex flex-center stripped-background">
    <div class="text-white text-center q-pa-md flex flex-center">
      <div>
        <div style="font-size: 30vh">404</div>

        <div class="text-h2 text-bold" style="opacity: 0.7">
          Oops. Nothing here...
        </div>

        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          to="/"
          label="Go Home"
          no-caps
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style lang="scss" scoped>
.stripped-background {
  color: $blue;

  background: repeating-linear-gradient(
    45deg,
    $blue-7,
    $blue-7 20px,
    $blue-5 20px,
    $blue-5 40px
  );
}
</style>
