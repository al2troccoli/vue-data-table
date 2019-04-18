import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
    state: {
        appStatus: 'pending',
        assets: [],
        assetsFiltered: [],
        user: {},
        title: '',
        currency: '',
        currentSelectedAssetIndex: null
    },
    mutations: {
        updateCurrentAssetIndex(state, index) {
            state.currentSelectedAssetIndex = index;
        },
        resetCurrentAssetIndex(state) {
            state.currentSelectedAssetIndex = null;
        },
        updateFilteredAssetsArray(state, filteredArray) {
            state.assetsFiltered = filteredArray;
        },
        setCollections(state, data) {
            state.assets = data.assets;
            state.title = data.title.title;
            state.columnsNames = data.columns;
            state.currency = data.currency.currency;
            state.user = data.user;
        },
        setAppStatus(state, payload) {
            state.appStatus = payload;
        },
        setAssetsArray(state, payload) {
            state.assets = payload;
        },
        removeAsset(state, asset) {
            state.assets.splice(state.assets.indexOf(asset), 1);
            Vue.axios.delete(`http://localhost:3000/assets/${asset.id}`)
        },
        putAsset(state, asset) {
            Vue.axios.put(`http://localhost:3000/assets/${asset.id}`, asset)
        }
    },
    getters: {
        getCurrency(state) {
            return state.currency === "EUR" ? "€" : "$";
        }
    },
    actions: {
        async fetchCollections({commit}) {
            try {
                await Vue.axios
                    .get("http://localhost:3000/db")
                    .then(response => commit('setCollections', response.data));

                // NOTE: This timeout is for showing the preloader component
                setTimeout(function () {
                    commit('setAppStatus', 'success');
                }, 2000)

            } catch (e) {
                console.error(e);
                commit('setAppStatus', 'error');
            }
        },
        updateAssetsArray({commit}, payload) {
            commit('setAssetsArray', payload);
        },
        deleteAsset({commit}, asset) {
            commit('removeAsset', asset);
            commit('resetCurrentAssetIndex');
        },
        updateAsset({commit}, asset) {
            commit('putAsset', asset);
        },
        updateSelectedAssetIndex({commit}, index) {
            commit('updateCurrentAssetIndex', index);
        },
        resetSelectedAssetIndex({commit}) {
            commit('resetCurrentAssetIndex');
        },
    }
})

