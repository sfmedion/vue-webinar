import Vue from "vue";
import AsyncComputed from "vue-async-computed";
import App from "./App.vue";

Vue.use(AsyncComputed);

new Vue({ render: (h) => h(App) }).$mount("#app");