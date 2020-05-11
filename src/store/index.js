import Vue from 'vue'
import Vuex from 'vuex'
import ConverterService from '../services/ConverterService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies: null
  },
  mutations: {
    FETCH_CURRENCIES(state, currencies) {
      state.currencies = currencies
    }
  },
  actions: {
    getCurrencies({ commit }) {
      let currenciesObj = []
      ConverterService.getCurrencies().then(response => {
        const currenciesKeys = Object.keys(response.data)
        for (const key of currenciesKeys) {
          currenciesObj.push({
            code: key,
            description: response.data[key]
          })
        }
        commit('FETCH_CURRENCIES', currenciesObj)
      })
    }
  }
})
