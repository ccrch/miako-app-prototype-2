export const initScripts = () => {
  import('./core/helpers').then((module) => {
    module.pageRestore.init()
    module.prefetch.init()
  })

  console.log('Hi!')
  document.querySelector('html').classList.remove('preload')

  import('src/scripts/core/meta-theme-color-change').then((module) => module.default.init())
  import('src/scripts/layout/header').then((module) => module.default.init())
}
