<script lang="ts">
import { defineComponent, onMounted, ref, nextTick } from 'vue';

export default defineComponent({
  name: 'WelcomeView',

  setup() {
    const randomImagesMatrix = ref<number[][]>([]);

    const addAnimation = () => {
      const scrollers = document.querySelectorAll('.scroller');

      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', 'true');

        const scrollerInners = scroller.querySelectorAll('.scroller-container');

        scrollerInners.forEach((scrollerInner) => {
          if (scrollerInner) {
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
              const duplicatedItem = item.cloneNode(true) as HTMLElement;
              duplicatedItem.setAttribute('aria-hidden', 'true');
              scrollerInner.appendChild(duplicatedItem);
            });
          }
        });
      });
    };

    const generateRandomImages = () => {
      const rows = 7;
      const imagesPerRow = 10;
      const totalImages = 20;

      const generateUniqueRandomNumbers = (total: number, count: number): number[] => {
        const numbers = Array.from({ length: total }, (_, i) => i + 1);
        for (let i = numbers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
        return numbers.slice(0, count);
      };

      for (let i = 0; i < rows; i++) {
        randomImagesMatrix.value.push(generateUniqueRandomNumbers(totalImages, imagesPerRow));
      }
    };

    onMounted(() => {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        generateRandomImages();
        nextTick(() => {
          addAnimation();
        });
      }
    });

    return {
      randomImagesMatrix
    };
  },
});
</script>

<template>
  <div class="w-full h-dvh overflow-hidden">
    <div class="scroller overflow-hidden rotate-12 fixed" data-direction="left" data-speed="slow">
      <div class="scroller__inner flex flex-col overflow-hidden">
        <div v-for="(row, rowIndex) in randomImagesMatrix" :key="rowIndex"
          class="scroller-container flex flex-row w-full">
          <img v-for="(image, index) in row" :key="index" :src="`/welcters/poster${image}.webp`"
            class="welcome-image bg-gray-300" />
        </div>
      </div>
    </div>
  </div>
  <div class="absolute top-0 p-2">
    <p class="text-sm text-gray-300">©2022-2024 OTA-KU Все права защищены.</p>
  </div>
  <div class="absolute bottom-0 w-full">
    <div class="w-full flex flex-col justify-center items-center">
      <img src="/otaKashima/ota-ku-kashima.png" class="w-1/2 md:w-56 lg:w-60 xl:w-72"/>
      <div class="mt-1 mb-4 text-center">
        <h1 class="text-4xl  md:text-5xl font-sans font-bold leading-none">Добро пожаловать</h1>
        <h2 class="text-xl lg:text-xl mt-2 leading-none">Здесь начинаются ваши<br> незабываемые приключения.</h2>
      </div>
      <div class="flex max-w-48 w-full flex-col gap-2 mt-3 mb-8">
        <NuxtLink type="submit" class="button-primary button" to="/auth/login">Войти</NuxtLink>
        <span class="text-center text-blue-400 font-semibold font-sans text-sm">или</span>
        <NuxtLink class="link link-primary" to="/auth/register">Создать акканут</NuxtLink>
      </div>
      <div clas="mb-1">
        <p class="text-sm text-center">Весь контент на сайте предназначен исключительно для личного ознокомительного просмотора.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroller {
  top: 0px;
  left: -30dvw;
}

.scroller__inner {
  display: flex;
  flex-direction: column;
  gap: 1dvw;

  .scroller-container {
    display: flex;
    flex-direction: row;
    gap: 1dvw;

    .welcome-image {
      width: 15dvw;
      height: auto;
      aspect-ratio: 1 / 1.4;
      border-radius: 15px;
      gap: 1dvw;
    }
  }

  @media (max-width: 1024px) {
    &,
    .scroller-container {
      gap: 1vw;
      border-radius: 10px;
    }

    .scroller-container {
      .welcome-image {
        width: 17dvw;
      }
    }
  };

  @media (max-width: 768px) {
    &,
    .scroller-container {
      gap: 1dvw;
      border-radius: 8px;
    }

    .scroller-container {
      .welcome-image {
        width: 20dvw;
      }
    }
  }

  @media (max-width: 425px) {
    &,
    .scroller-container {
      gap: 2.5dvw;
    }

    .scroller-container {
      .welcome-image {
        width: 33dvw;
      }
    }
  }
}

.scroller[data-animated='true'] {
  overflow: hidden;
  -webkit-mask: linear-gradient(90deg,
      transparent,
      white 20%,
      white 80%,
      transparent);
  mask: linear-gradient(90deg, transparent, white 30%, white 80%, transparent);
}

.scroller[data-animated='true'] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-direction='right'] {
  --_animation-direction: reverse;
}

.scroller[data-direction='left'] {
  --_animation-direction: forwards;
}

.scroller[data-speed='fast'] {
  --_animation-duration: 20s;
}

.scroller[data-speed='slow'] {
  --_animation-duration: 60s;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
</style>
