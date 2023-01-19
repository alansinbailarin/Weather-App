<template>
  <nav class="bg-white shadow-sm dark:bg-gray-800 bg-opacity-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex p-3 items-center justify-between">
        <div><h1 class="text-3xl font-bold text-blue-600">ClimaApp</h1></div>
        <div class="flex items-center gap-3">
          <div>
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              ></div>
              <button
                class="bg-indigo-600 text-white rounded-md shadow-md px-5 py-1"
                type="submit"
              >
                Buscar
              </button>
            </div>
          </div>
          <div>
            <!-- <button @click="changeDarkMode">Cambiar</button> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
export default {
  name: "header-component",
};
</script>
<script setup lang="ts">
// import { ref } from "vue";

// if (
//   localStorage.theme === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// const toggleDarkMode = ref(document.documentElement.className.includes("dark"));
// const changeDarkMode = () => {
//   toggleDarkMode.value = document.documentElement.classList.toggle("dark");
//   toggleDarkMode.value
//     ? (localStorage.theme = "dark")
//     : (localStorage.theme = "light");
// };
</script>
