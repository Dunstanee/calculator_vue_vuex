import calMutation from "@/stores/modules/calculator/mutations";
import calActions from "@/stores/modules/calculator/actions";
import calGetters from "@/stores/modules/calculator/getters"

export default {
    namespaced: true,
    state(){
        return{
            fullEquation: 0,
            selectedOperator: null,
            syntax: '0'
        }
    },
    mutations : calMutation,
    actions : calActions,
    getters : calGetters
}