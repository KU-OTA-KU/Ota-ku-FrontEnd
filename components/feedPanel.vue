<template>
  <section class="w-full bg-zinc-950 px-1 py-1 lg:py-2">
    <div v-for="res in data" :key="res.id"
      class="container p-4 max-w-8xl mb-2 lg:mb-4 mx-auto flex flex-col gap-2 md:gap-5 md:flex-row">
      <div class="w-full lg:w-4/5 overflow-hidden aspect-video relative">
        <NuxtImg :src="res.image" class="h-full w-full rounded-lg" style="object-fit: cover; object-position: center;"
          loading="lazy" format="webp"></NuxtImg>
        <div class="w-full h-full absolute top-0 bg-custom-feed-gradient-t z-10"></div>
      </div>
      <div class="text-left lg:text-right w-full container-text">
        <div>
          <h2 class="h3 mb-1">{{ res.titleRU }}</h2>
          <div class="flex lg:justify-end container-genres opacity-65 mt-1 mb-1 text-sm md:text-base md:mt-2 md:mb-2">
            <p class="" v-for="(genre, index) in res.genres" :key="index">{{ genre }}<span
                v-if="index < res.genres.length - 1" class="mr-3 ml-3">•</span>
            </p>
          </div>
          <p class="line-clamp-6 opacity-80 text-xs md:text-base">{{ res.descriptionRU }}</p>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
export default defineComponent({
  name: "feedPanelComponent",
  setup() {
    const data = ref(null);

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/feedPanel.json');
        data.value = response.data;
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

<style scoped>
.container:nth-child(2) {
  @apply lg:flex-row-reverse
}

.container:nth-child(2) .container-text {
  @apply lg:text-left
}

.container:nth-child(2) .container-genres {
  @apply lg:justify-start
}
</style>