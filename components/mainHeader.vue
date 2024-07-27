<template>
  <header class="hidden top-0 p-2  bg-zinc-950 sticky md:block" id="header">
    <div class="container mx-auto max-w-7xl pt-2 pb-2 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <NuxtLink class="cursor-pointer" to="/">
          <NuxtImg class="mx-auto w-36 pointer-events-none select-none" preload format="webp"
            src="/otaKu/ota-ku-kashima.png" alt="Ota-ku Смотреть аниме в нашем платформе" />
        </NuxtLink>
        <nav class="ml-10 flex gap-3" id="nav">
          <NuxtLink id="0" to="/review" class=" text-nowrap font-sans button button-secondary">Обзор</NuxtLink>
          <NuxtLink id="1" to="/catalog" class=" text-nowrap font-sans button button-secondary">Каталог</NuxtLink>
          <NuxtLink id="2" to="/today" class=" text-nowrap font-sans button button-secondary">Сегодня</NuxtLink>
        </nav>
      </div>
      <div>
        <div class="flex flex-row items-center" v-if="profile">
          <div class="mr-3">
            <p class="text-sm text-right">Эсдэт エスデス</p>
            <p class="text-xs text-gray-300 text-right">41541 :ID</p>
          </div>
          <div class="w-10 h-10  bg-zinc-700 rounded-full cursor-pointer overflow-hidden">
            <NuxtImg class="w-10 pointer-events-none select-none"
              src="https://desu.shikimori.one/uploads/poster/characters/65239/main-a381e764f99d89b536e5d8f264b2eedd.webp"
              alt="Ota-ku profile image" />
          </div>
        </div>
        <div class="flex flex-row items-center" v-else>
          <NuxtLink class="button button-secondary active" to="/welcome">нет профиля?</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, toRefs } from 'vue';

export default defineComponent({
  name: "mainHeader",

  props: {
    active: {
      type: Number,
      required: false,
    },
  },

  setup(props) {
    const { active } = toRefs(props);
    const profile = false;

    const activeHeaderNavigationLinks = (query: number) => {
      const currentNavItem = document.querySelector(`#header #nav a[id="${query}"]`);
      if (currentNavItem) {
        currentNavItem.classList.add('active');
      }
    };

    const removeHeaderNavigationLinks = (query: number) => {
      const currentNavItem = document.querySelector(`#header nav a[id="${query}"]`);
      if (currentNavItem) {
        currentNavItem.classList.remove('active');
      }
    };

    onMounted(() => {
      activeHeaderNavigationLinks(active.value);
    });

    onBeforeUnmount(() => {
      removeHeaderNavigationLinks(active.value);
    });

    return {
      profile,
      activeHeaderNavigationLinks,
      removeHeaderNavigationLinks,
    };
  },
});
</script>
