<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
