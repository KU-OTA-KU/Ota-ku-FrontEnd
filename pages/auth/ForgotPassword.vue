<template>
  <div class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
    <div class="block lg:hidden pt-4 pr-5 pl-5 absolute top-0 left-0">
      <NuxtLink to="/auth/signin" class="font-sans font-sm">
        <svg class="w-10 h-10 p-2  bg-zinc-800 rounded-lg hover:bg-zinc-700" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </NuxtLink>
    </div>
    <div class="pointer-events-none select-none">
      <NuxtImg class="mx-auto w-52 pointer-events-none select-none" preload format="webp"
        src="/otaKu/ota-ku-kashima.png" alt="Ota-ku Смотреть аниме в нашем платформе" />
      <h2 class="mt-3 text-center text-lg font-semibold font-sans leading-5">Разве настоящие отаку забывают пароли?!
      </h2>
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
          <button :disabled="isSubmitDisabled" type="submit" class="button button-primary"
            :class="{ 'button-disabled': isSubmitDisabled }">Продолжать</button>
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
import { defineComponent, onMounted } from 'vue';
import { validateEmail } from '~/utils/validation';
import { useNuxtApp } from '#app';
export default defineComponent({
  name: "forgotPasswordComponent",

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
      errors: {},
      isSubmitDisabled: true,
    };
  },
  methods: {
    validateForm() {
      const errors: ValidationErrors = {};
      validateEmail(this.email, errors);
      this.errors = errors;
      this.isSubmitDisabled = !!Object.keys(this.errors).length;
    },
    submitForm() {
      console.log('Form submitted:', { emailLogin: this.email });
      this.$router.push('/auth/otp')
    }
  }
});
</script>

<style scoped></style>
