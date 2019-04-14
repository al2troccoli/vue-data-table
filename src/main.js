import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueFire from 'vuefire'

// main styles
require('./styles/main.scss');

Vue.config.productionTip = false;
Vue.use(VueFire);


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
