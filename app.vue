<template>
  <NuxtLayout />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { App as CapacitorApp } from '@capacitor/app';

export default defineComponent({
  name: "appGlobalComponent",

  mounted() {
    let lastBackPress = 0;
    CapacitorApp.addListener('backButton', () => {
      const currentTime = new Date().getTime();
      if (currentTime - lastBackPress < 1500) {
        CapacitorApp.exitApp();
      } else {
        lastBackPress = currentTime;
        window.history.back();
      }
    });
  },
});
</script>

<style>
/* Анимация для входа страницы */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

/* Начальное состояние для входа страницы */
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>