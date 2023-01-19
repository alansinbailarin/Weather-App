<template>
  <div class="mx-auto max-w-7xl px-4 mt-6"></div>
</template>
<script lang="ts">
export default { name: "local-weather-view" };
</script>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import type { weather, weatherDays } from "@/interfaces/fiveDaysWeather";

const dataByCity = ref<weather>({} as weather);
const dataCurrent = ref<weather>({} as weather);
const dataDays = ref<weatherDays>({} as weatherDays);
let loading = ref<boolean>(true);

let unit = "metric";
let city_name = "Tijuana";
const API_key = "21a45b728b91cea07a38b918145aafc4";

const getWeather = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let longitud = position.coords.longitude;
    let latitud = position.coords.latitude;

    const getWeatherByCity = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&lang=es&appid=${API_key}&units=${unit}`;
    const getCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lang=es&lon=${longitud}&appid=${API_key}&units=${unit}`;
    const getFiveDaysWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&appid=${API_key}&lang=es&units=${unit}`;

    fetch(getWeatherByCity)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        loading.value = true;
        try {
          dataByCity.value = data;

          console.log(dataByCity);
        } catch (error) {
          console.log(error);
        } finally {
          loading.value = false;
        }
      });

    fetch(getCurrentWeather)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        loading.value = true;
        try {
          dataCurrent.value = data;

          console.log(dataCurrent);
        } catch (error) {
          console.log(error);
        } finally {
          loading.value = false;
        }
      });

    fetch(getFiveDaysWeather)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        loading.value = true;
        try {
          dataDays.value = data;

          console.log(dataDays);
        } catch (error) {
          console.log(error);
        } finally {
          loading.value = false;
        }
      });

    console.log(getWeatherByCity);
    console.log(getCurrentWeather);
    console.log(getFiveDaysWeather);
  });
};

onMounted(() => {
  getWeather();
});
</script>
