import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//路由的前置守卫判断哪些路由需要登录才能访问
router.beforeEach((to, from, next) => {
  // 获取仓库里的登录信息
  const token = store.state.token
  if(to.matched.some(item => item.meta.requiredAuth)){
    if(token){
      next()
    }else{
      next({path:'/login'})
    }
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
