<script setup lang="ts">
import AppHeader from './components/layout/Header.vue'
import AppFooter from './components/layout/Footer.vue'
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <AppHeader />
  <!--  <Navbar />-->
  <RouterView />
  <Navbar />
  <AppFooter />
</template>
