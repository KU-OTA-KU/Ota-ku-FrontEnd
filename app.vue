<template>
  <NuxtLayout></NuxtLayout>
</template>
<script lang="ts">
import { onMounted } from 'vue';
import { StatusBar } from '@capacitor/status-bar';

export default {
  setup() {
    onMounted(async () => {
      await StatusBar.hide();
    });
  }
};
</script>