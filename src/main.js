// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import '@/common/css/reset.css'
import '@/common/css/base.css'

import VueParticles from 'vue-particles'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import mybutton from './components/index.js'
Vue.use(VueParticles)
// Vue.use(VueAwesomeSwiper)
Vue.component('mybutton', mybutton);
// Vue.use(mybutton)

Vue.config.productionTip = false // 线上改为true
Vue.config.debug = true // 开启debug模式

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
