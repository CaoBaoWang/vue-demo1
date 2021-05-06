import Vue from 'vue/dist/vue.js'
import 'ant-design-vue/dist/antd.css';

import Antd from 'ant-design-vue';
import App from './App.vue'
Vue.config.productionTip = false

Vue.use(Antd)
new Vue({
  render: h => h(App),
}).$mount('#app')
