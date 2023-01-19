<template>
  <div class="mx-auto max-w-7xl px-4 mt-6">
    <div class="mb-2">
      <div v-if="currentData.main.temp > 1 && currentData.main.temp < 10">
        <img src="../assets/images/lunamedia.png" alt="" class="w-14 mx-auto" />
      </div>
    </div>
    <div class="bg-white rounded-md shadow-sm p-4 border border-gray-100 mb-4">
      <div class="grid grid-cols 2">
        <div>
          <h1>as</h1>
          <h2>asd</h2>
        </div>
        <div></div>
      </div>
    </div>
    <div class="bg-gray-100 rounded-md p-4 flex items-center">
      <div v-for="item in fiveDaysData.list" class="card">a</div>
    </div>
  </div>
</template>
<script lang="ts">
export default { name: "local-weather-view" };
</script>

<script setup lang="ts">
import { ref } from "vue";

let loading = ref<boolean>(true);
let currentData = ref<any>({});
let fiveDaysData = ref<any>({});
let dataByCity = ref<any>({});
let longitud;
let latitud;
let unit = "metric";
let city_name = "Tijuana";
const API_key = "21a45b728b91cea07a38b918145aafc4";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    longitud = position.coords.longitude;
    latitud = position.coords.latitude;

    const getFiveDaysWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitud}&lon=${longitud}&appid=${API_key}&lang=es&units=${unit}`;
    const getWeatherByCity = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&lang=es&appid=${API_key}&units=${unit}`;
    const getCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lang=es&lon=${longitud}&appid=${API_key}&units=${unit}`;

    fetch(getFiveDaysWeather)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        loading.value = true;
        try {
          fiveDaysData.value = data;

          console.log(fiveDaysData);
        } catch (error) {
          console.log(error);
        } finally {
          loading.value = false;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(getCurrentWeather)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        loading.value = true;
        try {
          currentData.value = data;

          console.log(currentData);
        } catch (error) {
          console.log(error);
        } finally {
          loading.value = false;
        }
      })
      .catch((err) => {
        console.log(err);
      });

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
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
</script>
