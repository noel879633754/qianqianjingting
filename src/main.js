import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios,axios)
// Vue.prototype.$ajax = Axios
axios.defaults.baseURL = '/baidu_music_api';
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
