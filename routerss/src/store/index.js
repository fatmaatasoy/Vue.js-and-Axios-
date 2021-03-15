import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: {},

  },
  getters:{},
  mutations:{},
  actions: {
    async ActionUser(context,payload) { 
      let url="https://jsonplaceholder.typicode.com/"
      return await axios.get(url + payload)
        .then(response => {
          context.state.users = response.data
          
          return response
          ;
        })
    },


  },
  modules: {
  }
})
