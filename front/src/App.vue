<script setup lang="ts">
import AppHeader from './components/layout/Header.vue'
import AppFooter from './components/layout/Footer.vue'
</script>

<template>
  <AppHeader />
  <!--  <Navbar />-->
  <RouterView />
  <!-- This is where the router will display the components -->
  <AppFooter />
</template>
