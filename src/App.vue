<script setup>
  // importing parts
  import pageLoader from './components/pageLoader.vue'
  import navbar from './components/navbar.vue'
  import mainn from './components/main.vue'
</script>

<template>

  <pageLoader />

  <header>
    <navbar/>
  </header>

  <mainn />

</template>

<style lang="scss">
  @import '../src/assets/style/header.scss';
  @import '../src/assets/style/base.scss';
</style>
