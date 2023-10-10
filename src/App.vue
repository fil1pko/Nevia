<script setup>
// importing parts
  import navbar from './components/navbar.vue'

// importing sections
  import home from './components/sections/home.vue'
  import about from './components/sections/about.vue'
  import certificates from './components/sections/certificates.vue'
  import contact from './components/sections/contact.vue'
  import portfolio from './components/sections/portfolio.vue'
</script>

<template>
  <header>
    <navbar/>
  </header>

  <main>
    <home />
    <about />
    <portfolio />
    <certificates />
    <contact />
  </main>

  <footer>
  </footer>
</template>

<style lang="scss">
  @import '../src/assets/style/header.scss';
</style>
