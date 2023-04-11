import Vue from 'vue';
import App from './App';
import router from './router'
import store from './store'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
});
