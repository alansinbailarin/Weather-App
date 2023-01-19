<script setup lang="ts">
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>
