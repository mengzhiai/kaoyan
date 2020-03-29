import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/common.css";
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

/* const originalPush = router.prototype.push;
router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}; */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
