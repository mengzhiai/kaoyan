import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuNum: 0
  },
  mutations: {
    menuFun(state, data){
      console.log(data);
      state.menuNum = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
