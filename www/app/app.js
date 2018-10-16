import Vue from "vue"
import Vuex from "vuex"
import app from "./app.vue"
import {storeObj} from "./store/store.js"
Vue.use(Vuex)
const store = new Vuex.Store(storeObj)
new Vue({
    el:"#app",
    store,
    components:{
        app
    }
})