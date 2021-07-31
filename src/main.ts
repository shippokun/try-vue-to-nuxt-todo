import CompositionAPI from "@vue/composition-api";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(CompositionAPI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
