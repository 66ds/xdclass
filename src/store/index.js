import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || ''
  },
  mutations: {
    setToken(state,token){
      state.token = token
    }
  },
  //异步调用
  //context.commit
  //this.$store.dispatch
  actions: {
    setTokens(context,token){
      context.commit('setToken',token)
    },
    clearToken(context){
      context.commit('setToken','')
    }
  },
  modules: {
  }
})
