import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUi from "mint-ui";
import "mint-ui/lib/style.css";


Vue.config.productionTip = false;

Vue.use(MintUi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')