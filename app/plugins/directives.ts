import backdrop from '~/directives/backdrop'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('backdrop', backdrop)
})
