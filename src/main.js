import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'
import axios from 'axios'

// 按需引入Mint-UI组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入mui样式
import '@/assets/css/mui.min.css'
import '@/assets/css/icons-extra.css'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:8899'
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
