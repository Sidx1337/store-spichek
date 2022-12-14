import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import NowUiKit from './plugins/now-ui-kit';
import router from './router';


Vue.config.productionTip = false

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
app.config.globalProperties.items = [];
Vue.use(BootstrapVue);
Vue.use(NowUiKit);
