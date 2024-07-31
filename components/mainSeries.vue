<template>
  <section class="w-full bg-zinc-900 p-2">
    <div class="max-w-8xl mx-auto container">
      <div class="w-full p-2">
        <h2 class="h3">{{ title }}<span class="opacity-80 text-sm md:text-base lg:text-lg ml-2">/ {{ subtitle }}</span>
        </h2>
      </div>
      <div class="w-full">
        <Swiper :modules="[]" :loop="false" :effect="'creative'" :grab-cursor="true" :breakpoints="{
          390: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 10
          },
          1440: {
            slidesPerView: 8,
            spaceBetween: 10
          }
        }">
          <SwiperSlide v-if="data" v-for="res in data" :key="res.id">
            <div class="w-full  bg-zinc-800 relative rounded-md overflow-hidden">
              <NuxtImg format="webp" :src="res.image" class="w-full h-full object-cover" loading="lazy" />
              <div class="w-full h-full flex flex-col justify-end p-4 bg-custom-series-gradient-t absolute bottom-0">
                <h2 class="h3 mb-1 line-clamp-1">{{ res.titleRU }}<span
                    class="opacity-80 text-sm md:text-base lg:text-lg ml-2">/ {{ res.titleEN }}</span></h2>
                <p class="line-clamp-2 opacity-80 text-sm md:text-base">{{ res.descriptionRU }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: "mainSeriesComponent",

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    apiFetchPath: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const data = ref(null);

    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/anime/${props.apiFetchPath}.json`);
        data.value = response.data.sort(() => Math.random() - 0.5);
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return { data };
  },

});
</script>

<style scoped></style>
