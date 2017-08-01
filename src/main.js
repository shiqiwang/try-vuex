// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

let len = 100

let store = new Vuex.Store({
  state: {
    sizeObj: {
      height: len + 'px',
      width: len + 'px'
    }
  },
  mutations: {
    smaller (state) {
      if (len < 1) {
        return
      }
      len--
      state.sizeObj.height = len + 'px'
      state.sizeObj.width = len + 'px'
    },
    bigger () {

    }
  },
  actions: {
    beSmall ({commit}) {
      setInterval(() => {
        commit('smaller')
      }, 200)
    },
    beBig ({commit}) {

    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
