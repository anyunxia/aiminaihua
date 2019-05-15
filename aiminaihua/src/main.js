// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/static/style/reset.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/footer'
import Titleline from '@/components/Titleline/titleline'
import 'swiper/dist/css/swiper.css'
import VueSwiper from 'vue-awesome-swiper'
Vue.use(VueSwiper, /* { default global options } */)
Vue.config.productionTip = false
import animate from 'animate.css'
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

/* eslint-disable no-new */
Vue.component("v-header",Header)
Vue.component("v-footer",Footer)
Vue.component("v-title",Titleline)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
