<script setup lang="ts">
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <Header />
  <RouterView />
  <!-- This is where the router will display the components -->
  <Footer />
</template>
