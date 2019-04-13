import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    assets: [
      {
        term: "accessory tray",
        serial_number: "SN00009582200A4",
        organization: "Celestron",
        price: 1234,
        status: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        term: "accessory tray",
        serial_number: "SN000095822XXX",
        organization: "TESACO",
        price: 999,
        status: 0,
        description: "Post rock is dead Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        term: "accessory tray",
        serial_number: "SN000095822XXX",
        organization: "TESACO",
        price: 1020,
        status: 0,
        description: "Post rock is dead Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
    currentSelectedAsset: null
  },
  mutations: {
    selectItem(state, index) {
      state.currentSelectedAsset = index;
    }
  },
  actions: {

  }
})

