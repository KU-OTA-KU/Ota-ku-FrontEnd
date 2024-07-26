<template>

  <div class="flex flex-col justify-center h-dvh px-6 py-12 lg:px-8">
    <div class="block lg:hidden pt-4 pr-5 pl-5 absolute top-0 left-0">
    <NuxtLink to="/welcome" class="font-sans font-sm">Назад</NuxtLink>
    </div>
    <div class=" pointer-events-none select-none">
      <NuxtImg class="mx-auto w-52  pointer-events-none select-none"  preload format="webp" src="/otaKu/ota-ku-kashima.png" alt="Ota-ku Смотреть аниме в нашем платформе"/>
      <h2 class="mt-3 text-center text-lg font-semibold font-sans leading-5">Откройте для себя мир Отаку!</h2>
    </div>

    <div class="mt-7 sm:mx-auto sm:w-full sm:max-w-md flex flex-col">
      <form class="space-y-5" action="#" method="POST">
        <div>
          <label for="email&login" class="block text-sm font-medium leading-5">Эл. почта или Логин</label>
          <div class="mt-1">
            <input id="email&login" name="email&login" type="text" autocomplete="current-login" required
              class="input input-primary" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-5">Пароль</label>
            <div class="mt-1">
              <NuxtLink class="text-sm text-blue-400" to="/auth/forgotpassword">Забыли Пароль?</NuxtLink>
            </div>
          </div>
          <div class="mt-1">
            <input id="password" name="password" type="password" autocomplete="current-password" required
              class="input input-primary" />
          </div>
        </div>

        <div>
          <button type="submit" class="button button-primary button-disabled" disabled>Войти</button>
        </div>
      </form>

      <div class="mt-5 text-center">
        <p class="text-xs text-gray-400">Используя сайт / приложение, Вы соглашаетесь с условиями <NuxtLink to="/doc/terms_ru" class="underline text-blue-500">Пользовательсово соглашения.</NuxtLink> и <NuxtLink to="/doc/privacy_policy_ru" class="underline text-blue-500">Политика конфиденциальности.</NuxtLink> Если Вы не согласны с условиями данного соглашения, не используйте сайт / приложение Ota-ku!</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>