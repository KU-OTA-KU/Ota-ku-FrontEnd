<template>
  <div class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
    <div class="block lg:hidden pt-4 pr-5 pl-5 absolute top-0 left-0">
      <NuxtLink to="/welcome" class="font-sans font-sm"><svg
          class="w-10 h-10 p-2  bg-zinc-800 rounded-lg hover:bg-zinc-700" viewBox="0 0 512 512" version="1.1"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>cancel</title>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="work-case" class="fill-white" transform="translate(91.520000, 91.520000)">
              <polygon id="Close"
                points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">

              </polygon>
            </g>
          </g>
        </svg></NuxtLink>
    </div>
    <div class="pointer-events-none select-none">
      <NuxtImg class="mx-auto w-52 pointer-events-none select-none" preload format="webp"
        src="/otaKu/ota-ku-kashima.png" alt="Ota-ku Смотреть аниме в нашем платформе" />
      <h2 class="mt-3 text-center text-lg font-semibold font-sans leading-5">Откройте для себя мир Отаку!</h2>
    </div>
    <div class="mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col">
      <form class="space-y-5" @submit.prevent="submitForm">
        <div>
          <label for="email" class="block text-sm font-medium leading-5 text-white">Эл. почта</label>
          <div class="mt-1">
            <input id="email" v-model="email" @input="validateForm" type="text" autocomplete="current-login" required
              placeholder="Введите эл. почту" class="input input-primary" />
            <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-5 text-white">Пароль</label>
            <div class="mt-1">
              <NuxtLink class="text-sm text-blue-400" to="/auth/forgotpassword">Забыли Пароль?</NuxtLink>
            </div>
          </div>
          <div class="mt-1">
            <input id="password" v-model="password" @input="validateForm" type="password"
              autocomplete="current-password" required placeholder="Введите пароль" class="input input-primary" />
            <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
          </div>
        </div>

        <div>
          <button :disabled="isSubmitDisabled" type="submit" class="button button-primary"
            :class="{ 'button-disabled': isSubmitDisabled }">Войти</button>
        </div>
      </form>

      <div class="mt-5 text-center">
        <p class="text-xs text-gray-400">Используя сайт / приложение, Вы соглашаетесь с условиями <NuxtLink
            to="/doc/terms_ru" class="underline text-blue-500">Пользовательсово соглашения.</NuxtLink> и <NuxtLink
            to="/doc/privacy_policy_ru" class="underline text-blue-500">Политика конфиденциальности.</NuxtLink> Если Вы
          не согласны с условиями данного соглашения, не используйте сайт / приложение Ota-ku!<br>
          а также подтверждаете, что вам больше 16 лет.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { validateEmail, validatePassword } from '~/utils/validation';
import { useNuxtApp } from '#app';
export default defineComponent({
  name: "signInComponent",

  setup() {
    const { $statusBar, $navigationBar } = useNuxtApp();

    onMounted(async () => {
      $navigationBar.overlayShow();
      $statusBar.overlayShow();
      $navigationBar.setColor('#18181B');
      $statusBar.setColor('#18181B');
    });
  },

  data() {
    return {
      email: '',
      password: '',
      errors: {},
      isSubmitDisabled: true,
    };
  },
  methods: {
    validateForm() {
      const errors: ValidationErrors = {};
      validateEmail(this.email, errors);
      validatePassword(this.password, errors);
      this.errors = errors;
      this.isSubmitDisabled = !!Object.keys(this.errors).length;
    },
    submitForm() {
      console.log('Form submitted:', { emailLogin: this.email, password: this.password });
    }
  }
});
</script>

<style scoped></style>
