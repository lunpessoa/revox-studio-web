import Vue from 'vue';
import BootstrapVue, { IconsPlugin } from 'bootstrap-vue';
import VueTheMask from 'vue-the-mask';
import VTooltip from 'v-tooltip';
import Toast, { POSITION } from 'vue-toastification';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vue-toastification/dist/index.css';

Vue.use(VueTheMask);
Vue.use(VTooltip);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Toast, {
  position: POSITION.TOP_RIGHT,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
