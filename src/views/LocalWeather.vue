<template>
  <div class="mx-auto max-w-7xl px-4 mt-12 md:grid md:grid-cols-4">
    <div class="text-center">
      <div v-if="loadingCurrent">
        <div
          class="flex items-center justify-center h-[11.3rem] md:h-[14.5rem] mb-4 bg-gray-300 rounded dark:bg-gray-700"
        >
          <svg
            class="w-12 h-12 text-gray-200 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path
              d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
            />
          </svg>
        </div>
      </div>
      <div class="w-56 md:w-72 mx-auto object-center" v-else>
        <img
          v-if="dataCurrent.main?.temp < 10"
          src="../assets/images/ventoso.png"
          alt=""
        />
        <img
          v-else-if="dataCurrent.main?.temp > 10 && dataCurrent.main?.temp < 24"
          src="../assets/images/sunny.png"
          alt=""
        />
        <img
          v-else-if="dataCurrent.main?.temp > 24"
          src="../assets/images/climacaluroso.png"
          alt=""
        />
      </div>
      <div class="grid grid-cols-3 mt-10 text-gray-700 dark:text-gray-300">
        <div>
          <h1 class="font-medium text-lg">Temperatura</h1>
          <div
            v-if="loadingCurrent"
            class="h-2.5 mt-2 bg-gray-200 rounded-full dark:bg-gray-700 w-14 mx-auto"
          ></div>
          <p v-else class="font-extrabold">
            {{ dataCurrent.main?.temp + " C°" }}
          </p>
        </div>
        <div>
          <h1 class="font-medium text-lg">Viento</h1>
          <div
            v-if="loadingCurrent"
            class="h-2.5 mt-2 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mx-auto"
          ></div>
          <p v-else class="font-extrabold">
            {{ dataCurrent.wind?.speed + " Km/h" }}
          </p>
        </div>
        <div>
          <div>
            <h1 class="font-medium text-lg">Viento</h1>
            <div
              v-if="loadingCurrent"
              class="h-2.5 mt-2 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mx-auto"
            ></div>
            <p v-else class="font-extrabold">
              {{ dataCurrent.main?.humidity + " %" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default { name: "local-weather-view" };
</script>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import type { weather, weatherDays } from "@/interfaces/fiveDaysWeather";

const dataByCity = ref<weather>({} as weather);
const dataCurrent = ref<weather>({} as weather);
const dataDays = ref<weatherDays>({} as weatherDays);
let loadingByCity = ref<boolean>(true);
let loadingCurrent = ref<boolean>(true);
let loadingFiveDays = ref<boolean>(true);

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
        loadingByCity.value = true;
        try {
          dataByCity.value = data;

          console.log(dataByCity);
        } catch (error) {
          console.log(error);
        } finally {
          loadingByCity.value = false;
        }
      });

    fetch(getCurrentWeather)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        loadingCurrent.value = true;
        try {
          dataCurrent.value = data;

          console.log(dataCurrent);
        } catch (error) {
          console.log(error);
        } finally {
          loadingCurrent.value = false;
        }
      });

    fetch(getFiveDaysWeather)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        loadingFiveDays.value = true;
        try {
          dataDays.value = data;

          console.log(dataDays);
        } catch (error) {
          console.log(error);
        } finally {
          loadingFiveDays.value = false;
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
