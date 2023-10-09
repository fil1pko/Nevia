<script setup>
import navbar from './components/navbar.vue'

import home from './components/sections/home.vue'
import about from './components/sections/about.vue'
import certificates from './components/sections/certificates.vue'
import contact from './components/sections/contact.vue'
</script>

<template>
  <header>
    <navbar/>
  </header>

  <main>
    <home />
    <about />
    <certificates />
    <contact />
  </main>

  <footer>
  </footer>
</template>

<style lang="scss">
  @import '../src/assets/style/header.scss';
</style>
