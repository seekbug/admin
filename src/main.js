import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入编程式导航
import '@/utils/mixin.js'
//激活粒子特效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
//激活animate
import animated from 'animate.css' // npm install animate.css --save安装，在引入
Vue.use(animated)
//echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//excel
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)


//配置ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 配置 全局初始化样式
import '@/assets/css/reset.scss';
import '@/assets/font/iconfont.css';



Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
