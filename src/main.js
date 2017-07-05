// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
//入口文件
import App from './App.vue'
//引用配置好的文件
import routes from './router'

Vue.config.productionTip = false;


//使用路由文件
Vue.use(VueRouter);

//使用配置文件的规则
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render:(h) => h(App)
}).$mount('#app');
