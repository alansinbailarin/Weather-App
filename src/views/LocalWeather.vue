<template>
  <div class="mx-auto max-w-7xl px-4 mt-12">
    <div class="text-center">
      <div v-if="loadingCurrent">
        <div
          class="flex items-center justify-center w-52 md:w-72 mx-auto h-[11.3rem] md:h-[14.5rem] mb-20 bg-gray-300 rounded dark:bg-gray-700"
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
      <div
        v-else
        class="w-56 md:w-72 md:h-[14.5rem] h-[11.3rem] mx-auto mb-20 object-center"
      >
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
      <div
        class="grid grid-cols-3 mt-10 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="currentColor"
            class="bi bi-thermometer-half mx-auto text-indigo-600 dark:text-indigo-400"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"
            />
            <path
              d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="currentColor"
            class="bi bi-wind mx-auto text-indigo-600 dark:text-indigo-400"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <h1 class="font-medium text-lg">Viento</h1>
          <div
            v-if="loadingCurrent"
            class="h-2.5 mt-2 bg-gray-200 rounded-full dark:bg-gray-700 w-22 mx-auto"
          ></div>
          <p v-else class="font-extrabold">
            {{ dataCurrent.wind?.speed + " Km/h" }}
          </p>
        </div>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              class="bi bi-droplet-half mx-auto text-indigo-600 dark:text-indigo-400"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
              />
              <path
                fill-rule="evenodd"
                d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
              />
            </svg>
            <h1 class="font-medium text-lg">Humedad</h1>
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
    <div
      class="bg-gray-100 dark:bg-gray-800 p-4 text-gray-700 dark:text-gray-300 mt-6 rounded-lg text-sm uppercase"
    >
      <div class="inline-flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-calendar-check"
          viewBox="0 0 16 16"
        >
          <path
            d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
          />
        </svg>
        <h1>Pronóstico para los siguientes días</h1>
      </div>
      <div
        v-for="item in dataDays.list"
        class="grid grid-cols-3 p-1 mt-3 text-center"
      >
        <div>Fecha</div>
        <div v-for="weather in item.weather" class="mx-auto">
          <div v-if="weather.main === 'Clear'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-sun-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
              />
            </svg>
          </div>
          <div v-else-if="weather.main === 'Clouds'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cloud-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
              />
            </svg>
          </div>
          <div v-else-if="weather.main === 'Rain'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cloud-rain-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
              />
            </svg>
          </div>
        </div>
        <div>{{ item.main.temp + " C°" }}</div>
      </div>
    </div>
    <!-- <swiper
      :slidesPerView="4"
      :centeredSlides="true"
      :spaceBetween="30"
      :grabCursor="true"
      :pagination="{
        clickable: true,
      }"
      class="mt-10 p-4 md:hidden"
    >
      <swiper-slide
        class="bg-gray-100 rounded-md p-4 w-20"
        v-for="item in dataDays.list"
        ><p>{{ item.dt_txt }}</p></swiper-slide
      >
    </swiper> -->
  </div>
</template>
<script lang="ts">
export default {
  name: "local-weather-view",
};
</script>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { weather, weatherDays } from "@/interfaces/fiveDaysWeather";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const dataByCity = ref<weather>({} as weather);
const dataCurrent = ref<weather>({} as weather);
const dataDays = ref<weatherDays>({} as weatherDays);
let loadingByCity = ref<boolean>(true);
let loadingCurrent = ref<boolean>(true);
let loadingFiveDays = ref<boolean>(true);

let unit = "metric";
let city_name = "Tijuana";
const API_key = "21a45b728b91cea07a38b918145aafc4";
const modules = [Pagination];

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

onMounted(async () => {
  await getWeather();
});
</script>
