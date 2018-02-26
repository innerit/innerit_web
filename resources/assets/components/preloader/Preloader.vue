<template>
  <div class="page-loader-wrapper">
    <div class="loader">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <p>Cargando contenido...</p>
      <div class="m-t-30"><img src="/assets/images/logo.svg" width="48" height="48" alt="Nexa"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Preloader",
    data: () => ({

    })
  }
</script>

<style lang="scss" scoped>
  @import "Preloader.sass";
</style>
