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
      <form id="otp-form">
        <div class="flex items-center justify-center gap-3">
          <input type="text"
            class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            pattern="\d*" maxlength="1" />
          <input type="text"
            class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxlength="1" />
          <input type="text"
            class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxlength="1" />
          <input type="text"
            class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            maxlength="1" />

        </div>
        <div class="max-w-[260px] mx-auto mt-4">
          <button type="submit"
            class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Verify
            Account</button>
        </div>
      </form>
      <div>
        <button :disabled="isSubmitDisabled" type="submit" class="button button-primary"
          :class="{ 'button-disabled': isSubmitDisabled }">Отправить</button>
      </div>


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

</script>

<style scoped></style>
