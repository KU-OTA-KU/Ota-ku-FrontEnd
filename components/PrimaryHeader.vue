<template>
  <v-layout v-if="!isDesktop" style="height: 65px;" class="header-navigation">
    <v-app-bar tag="header" scroll-behavior="elevate" height="65">
      <v-container class="d-flex pa-0" style="max-width: var(--ota-ku-max-width)">
        <v-col align-self="center" class="d-flex">
          <v-toolbar-title style="max-width: 120px; min-width: 120px; margin-right: 20px" @click="goTo('/')"
            class="cursor-pointer">
            <v-img class="ota-ku-ru-icon user-select-none" src="assets/ota-kashima/ota-ku-kashima.png" width="100%"
              alt="ota-ku watch anime in good quality"></v-img>
          </v-toolbar-title>
          <v-toolbar-items class="header-toolbar-items ga-2 align-center d-flex">
            <v-btn variant="flat" class="text-capitalize font-weight-regular" to="/catalog" rounded="lg" size="small"
              height="35">
              Каталог
            </v-btn>
            <v-btn class="text-capitalize font-weight-regular" to="/releases" disabled rounded="lg" size="small"
              height="35">
              Релизы
            </v-btn>
            <v-btn class="text-capitalize font-weight-regular" to="/schedule" disabled rounded="lg" size="small"
              height="35">
              Расписание
            </v-btn>
            <!--            <v-btn class="text-capitalize font-weight-regular"-->
            <!--                   to="/schedule"-->
            <!--                   rounded="lg" size="small"  height="35">-->
            <!--              Приложение-->
            <!--            </v-btn>-->
          </v-toolbar-items>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="d-flex justify-end ga-1">
          <v-btn density="comfortable" icon="mdi-dice-multiple" variant="text"
            @click="this.$router.push('openAnimeView?animeId=' + Math.floor(Math.random() * 1000))"></v-btn>
          <!--<v-btn density="comfortable" icon="mdi-magnify" variant="text" disabled></v-btn>-->
          <v-btn density="comfortable" icon="mdi-cog" variant="text" disabled></v-btn>
          <!-- <v-btn density="comfortable" icon="mdi-theme-light-dark" variant="text" @click="changeTheme()"></v-btn> -->
          <v-btn density="comfortable" icon="mdi-account" variant="text" disabled></v-btn>
        </v-col>
      </v-container>
    </v-app-bar>
  </v-layout>
  <v-layout v-else="" class="bottom-navigation">
    <v-bottom-navigation tag="nav" elevation="4" class="d-flex" grow mode="shift" color="blue"
      style="backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
      <v-btn class="pa-0" to="/" lazy>
        <v-icon>mdi-home</v-icon>
        <span class="bottom-navigation-tapography-styles">Главная</span>
      </v-btn>
      <v-btn class="pa-0" to="/today" lazy disabled>
        <v-icon>mdi-history</v-icon>
        <span class="bottom-navigation-tapography-styles">Сегодня</span>
      </v-btn>

      <v-btn class="pa-0" to='/catalog' lazy>
        <v-icon>mdi-movie-filter</v-icon>
        <span class="bottom-navigation-tapography-styles">Каталог</span>
      </v-btn>

      <v-btn class="pa-0" to="/notes" lazy disabled>
        <v-icon>mdi-filmstrip-box-multiple</v-icon>
        <span class="bottom-navigation-tapography-styles">Заметки</span>
      </v-btn>

      <v-btn class="pa-0" to="/profile" lazy disabled>
        <v-icon>mdi-account-circle</v-icon>
        <span class="bottom-navigation-tapography-styles">Профиль</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useTheme } from 'vuetify';
import { openBottomNavigationRoute, goTo } from "~/typeScript/goTo";
import { isMobile } from "~/typeScript/mobileMode";
export default defineComponent({
  name: "PrimaryHeader",

  data() {
    return {
      openBottomNavigationRoute,
      isDesktop: isMobile(),
      goTo,
      loading: reactive({
        schedule: false,
        catalog: false,
        releases: false
      }),
    };
  },
  setup() {
    const theme = useTheme();
    const changeTheme = () => {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    };

    return {
      changeTheme
    };
  },

  methods: {
    getButtonVariant(route: string) {
      return this.$route.path === route ? 'tonal' : 'text';
    }
  }
});
</script>

<style lang="sass" scoped>
.bottom-navigation-tapography-styles
  font-size: 0.8em
</style>