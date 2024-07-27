import { defineNuxtPlugin } from '#app'
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar'
import { Capacitor } from '@capacitor/core'


export default defineNuxtPlugin(nuxtApp => {
  const isNativePlatform = Capacitor.isNativePlatform();

  const hideNavigationBar = async () => {
    if (isNativePlatform) {
      await NavigationBar.hide();
    }
  };

  const showNavigationBar = async () => {
    if (isNativePlatform) {
      await NavigationBar.show()
    }
  };

  const hideOverlay = async () => {
    if (isNativePlatform) {
      await NavigationBar.setTransparency({ isTransparent: true })
    }
  };

  const showOverlay = async () => {
    if (isNativePlatform) {
      await NavigationBar.setTransparency({ isTransparent: false })
    }
  };

  const setNavigationBarColor = async (color: string) => {
    if (isNativePlatform) {
      await NavigationBar.setColor({ color: color });
    }
  };

  nuxtApp.provide('navigationBar', {
    hide: hideNavigationBar,
    show: showNavigationBar,
    overlayHide: hideOverlay,
    overlayShow: showOverlay,
    setColor: setNavigationBarColor,
  })
})
