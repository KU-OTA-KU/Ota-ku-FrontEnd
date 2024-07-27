<template>
  <NuxtPage></NuxtPage>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { App as CapacitorApp } from '@capacitor/app';


export default defineComponent({
  name: "defaultLayout",

  setup() {
    const { $statusBar, $navigationBar } = useNuxtApp();

    useHead({
      meta: [
        { name: 'author', content: 'ota-ku' },
        { name: 'language', content: 'RU' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '600' },
        { property: 'ot:image:type', content: 'image/png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru' },
        { name: 'topic', content: 'ota-ku, аниме смотреть, аниме, лучшие аниме онлайн бесплатно, ота-ку, сайт аниме отаку, лучшие топ аниме смотреть' },
        { name: 'keywords', content: 'Ota-ku - Твой Личный Портал в Мир Аниме, аниме смотреть, аниме, лучшие аниме онлайн бесплатно, ота-ку, сайт аниме отаку, лучшие топ аниме смотреть' },
      ]
    });

    onBeforeMount( async () => {
      await $statusBar.setColor('#18181B');
      await $navigationBar.setColor('#18181B');
    });

    onMounted(async () => {
      let lastBackPress = 0;
      CapacitorApp.addListener('backButton', () => {
        const currentTime = new Date().getTime();
        if (currentTime - lastBackPress < 2000) {
          CapacitorApp.exitApp();
        } else {
          lastBackPress = currentTime;
          window.history.back();
        }
      });
    });
  },
});
</script>

<style>
html,
body,
#__nuxt {
  height: 100%;
  margin: 0;
}
</style>
