import { defineNuxtPlugin } from '#app'
import { StatusBar, Style } from '@capacitor/status-bar'
import { Capacitor } from '@capacitor/core'


export default defineNuxtPlugin(nuxtApp => {
  const isNativePlatform = Capacitor.isNativePlatform();

  const hideStatusBar = async () => {
    if (isNativePlatform) {
      await StatusBar.hide();
      await StatusBar.setOverlaysWebView({ overlay: true })
    }
  };

  const showStatusBar = async () => {
    if (isNativePlatform) {
      await StatusBar.show()
      await StatusBar.setOverlaysWebView({ overlay: false })
    }
  };

  const hideOverlay = async () => {
    if (isNativePlatform) {
      await StatusBar.setOverlaysWebView({ overlay: true })
    }
  };

  const showOverlay = async () => {
    if (isNativePlatform) {
      await StatusBar.setOverlaysWebView({ overlay: false })
    }
  };

  const setStatusBarStyleDark = async () => {
    if (isNativePlatform) {
      await StatusBar.setStyle({ style: Style.Dark })
    }
  };

  const setStatusBarStyleLight = async () => {
    if (isNativePlatform) {
      await StatusBar.setStyle({ style: Style.Light })
    }
  };

  const setStatusBarColor = async (color: string) => {
    if (isNativePlatform) {
      await StatusBar.setBackgroundColor({ color: color });
    }
  };

  nuxtApp.provide('statusBar', {
    hide: hideStatusBar,
    show: showStatusBar,
    overlayHide: hideOverlay,
    overlayShow: showOverlay,
    setDark: setStatusBarStyleDark,
    setLight: setStatusBarStyleLight,
    setColor: setStatusBarColor,
  })
})
