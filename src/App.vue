<script setup lang="ts">
import Banner from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <Banner />
  <Navbar />
  <RouterView />
  <Footer />
</template>
