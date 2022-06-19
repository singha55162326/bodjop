import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vue2-filters';
import VueHtmlToPaper from 'vue-html-to-paper';

Vue.config.productionTip = false;
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
}
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(VueHtmlToPaper, options);
//Vue.use(vue2Filters);
//Vue.filter("imageUrl", function (image) {
//return '${imageUrl}/${image}?timestamp=${Date.now()}';
//});