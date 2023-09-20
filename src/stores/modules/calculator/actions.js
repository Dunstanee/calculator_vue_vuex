const clearKey = ['Escape']
const getAnswerKey = ['Enter']
const deleteValue = ['Backspace']
const nums = ['1','2','3','4','5','6','7','8','9','0','00','.','+','-','*','/'];

export default {
    async enterNumber(context,payload){
     context.commit('enterNumber',payload)
    },

    async clearNumber(context){
        context.commit('clearNumber')
    },
    async giveAnswer(context){
        context.commit('giveAnswer')
    },
    async deleteValueEnteredFromRight(context){
        context.commit('deleteValueEnteredFromRight')
    },

    async getKeyValue(context,payload){

        payload = payload.toString();
        if (nums.includes(payload)) {
            await context.dispatch('enterNumber',payload)
        }
        if (clearKey.includes(payload)) {
            await context.dispatch('clearNumber')
        }
        if (getAnswerKey.includes(payload)) {
            await context.dispatch('giveAnswer')
        }
        if (deleteValue.includes(payload)) {
            await context.dispatch('deleteValueEnteredFromRight')
        }
    }

}