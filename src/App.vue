<script setup>
import navbar from './components/navbar.vue'

import home from './components/sections/home.vue'
import about from './components/sections/about.vue'
</script>

<template>
  <header>
    <navbar/>
  </header>

  <main>
    <home />
    <about />
  </main>

  <footer>
  </footer>
</template>

<style lang="scss">
  @import '../src/assets/style/header.scss';
</style>
