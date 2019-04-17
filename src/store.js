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
        price: "1234",
        status: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        term: "achromat",
        serial_number: "SN0000458925329",
        organization: "Skywatcher",
        price: "4546",
        status: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        term: "apochromatic",
        serial_number: "SN0000458925330",
        organization: "Coronado",
        price: "2534",
        status: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        term: "baffles",
        serial_number: "TN0000458925329",
        organization: "Meade",
        price: "4345",
        status: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        term: "BaK-4 glass",
        serial_number: "SN0000458925332",
        organization: "Vixen",
        price: "3345",
        status: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        term: "barlow lens",
        serial_number: "SN0000458925333",
        organization: "Orion",
        price: "2345",
        status: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        term: "binocular",
        serial_number: "TK0000458925329",
        organization: "Omegon",
        price: "1234",
        status: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        term: "camera adapter",
        serial_number: "SN0000506075329",
        organization: "IntesMicro",
        price: "2324",
        status: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        term: "ccd camera",
        serial_number: "SN0000506075338",
        organization: "APM",
        price: "2345",
        status: 0,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
    assetsFiltered: [],
    user: {
      avatar: "avatar-m@2x.jpg",
      last_login: "2017-08-22T16:42:00.000Z"
    },
    title: "Hubble`s assets",
    currency: "EUR",
    columnsNames: ['term', 'serial_number', 'organization', 'price', 'status'],
    currentSelectedAsset: null
  },
  mutations: {
    updateSelectedAsset(state, index) {
      state.currentSelectedAsset = index;
    },
    resetSelectedItem(state) {
      state.currentSelectedAsset = null;
    },
    updateFilteredAssetsArray(state, filteredArray) {
      state.assetsFiltered = filteredArray;
    }
  },
  getters: {
    getCurrency(state) {
      return state.currency === "EUR" ? "€" : "$";
    }
  },
  actions: {
  }
})

