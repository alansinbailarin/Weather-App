import { createRouter, createWebHistory } from "vue-router";
import LocalWeather from "@/views/LocalWeather.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LocalWeather,
    },
  ],
});

export default router;
