<template>
  <section class="w-full bg-zinc-900 pt-2 pr-2 pl-2">
    <div class="w-full">
      <Swiper :modules="[]" 
      :loop="false"
      :effect="'creative'"
      :grab-cursor="true"
      :breakpoints="{
        390: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 10
        }
      }"
      >
        <SwiperSlide v-if="data" v-for="res in data" :key="res.id">
          <div class="w-full aspect-square bg-zinc-800 relative rounded-md overflow-hidden"> 
            <NuxtImg format="webp" :src="res.image" class="w-full h-full" loading="lazy"/>
            <div class="w-full h-full flex flex-col justify-end p-4 bg-custom-genre-gradient-t absolute bottom-0">
                <h2 class="h3 mb-1 line-clamp-1">{{  res.titleRU }}<span class="opacity-80 text-sm md:text-base lg:text-lg ml-2" >/ {{ res.titleEN }}</span></h2>
                <p class="line-clamp-2 opacity-80 text-sm md:text-base">{{ res.descriptionRU  }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: "genresSliderComponent",

  setup() {
    const data = ref(null);

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/topGenres.json');
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

