<template>
  <div class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
    <div class="block lg:hidden pt-4 pr-5 pl-5 absolute top-0 left-0">
      <NuxtLink to="/auth/signin" class="font-sans font-sm"><svg
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
      <h2 class="mt-3 text-center text-lg font-semibold font-sans leading-5">Ну что придумаем новый пароль Сэмпай?!</h2>
    </div>
    <div class="mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col">
      <form class="space-y-5" @submit.prevent="submitForm">
        <div>
          <label for="password" class="block text-sm font-medium leading-5 text-white">Новый пароль</label>
          <div class="mt-1">
            <input id="password" v-model="password" @input="validateForm" type="password" placeholder="Введите пароль"
              autocomplete="current-password" required class="input input-primary" />
            <p v-if="errors.password" class="text-red-500 text-xs mt-1">{{ errors.password }}</p>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password-repeat" class="block text-sm font-medium leading-5 text-white">Повторите пароль</label>
          </div>
          <div class="mt-1">
            <input id="password-repeat" v-model="repeatPassword" @input="validateForm" type="password" placeholder="Повторите пароль"
              autocomplete="current-password" required class="input input-primary" />
            <p v-if="errors.repeatPassword" class="text-red-500 text-xs mt-1">{{ errors.repeatPassword }}</p>
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
import { validatePassword, validateRepeatPassword } from '~/utils/validation';

export default defineComponent({
  name: "signInComponent",

  data() {
    return {
      password: '',
      repeatPassword: '',
      errors: {},
      isSubmitDisabled: true,
    };
  },
  methods: {
    validateForm() {
      const errors: ValidationErrors = {};
      validatePassword(this.password, errors);
      validateRepeatPassword(this.password, this.repeatPassword, errors);
      this.errors = errors;
      this.isSubmitDisabled = !!Object.keys(this.errors).length;
    },
    submitForm() {
      console.log('Form submitted:', { password: this.password, repeatPassword: this.repeatPassword });
      this.$router.push("/auth/signin")
    }
  }
});
</script>

<style scoped></style>
