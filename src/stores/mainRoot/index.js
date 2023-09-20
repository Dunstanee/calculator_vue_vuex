import {createStore} from 'vuex'
import rootMutation from './mutations.js'
import rootAction from './actions.js'
import rootGetters from './getters.js'
import calculator from "@/stores/modules/calculator/index.js"

const store = createStore({
    modules: {
        calculator : calculator,
    },
    state() {
        return{
            userName : "Dunstan Safu",
        }
    },
    mutations: rootMutation,
    actions: rootAction,
    getters: rootGetters

});

export default store;