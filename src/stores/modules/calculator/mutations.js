const operators = ['+','-','*','/'];
const nums = ['1','2','3','4','5','6','7','8','9','0','00','.']

export default {
    async enterNumber(state, payload){
        payload = payload.toString()
        if(nums.includes(payload))
        {
            if(+payload === 0 && +state.syntax === 0 && state.syntax !== '0.')
            {
                if(payload === '00')
                {
                    state.syntax = '0'
                }else{
                    state.syntax = payload
                }
            }else{
                if(+payload > 0 && +state.syntax === 0 && state.syntax !== '0.')
                {
                    state.syntax = payload
                }else {
                    state.syntax = state.syntax+payload;
                }
            }

        }
        if(operators.includes(payload))
        {
            if(state.selectedOperator === null)
            {
                if(operators.includes(payload))
                {
                    state.selectedOperator = payload
                    state.fullEquation = +state.syntax;
                    state.syntax = 0;
                }
            }else{
                const answer = eval(+state.fullEquation +state.selectedOperator +state.syntax);
                state.selectedOperator = payload
                state.fullEquation = answer;
                state.syntax = 0;
            }

        }

    },
    async clearNumber(state){
        state.syntax = 0
        state.selectedOperator = null
        state.fullEquation = 0
    },
    async giveAnswer(state){
        const answer = eval(+state.fullEquation +state.selectedOperator +state.syntax);
        state.selectedOperator = null
        state.fullEquation = answer;
        state.syntax = 0;
    },
    async deleteValueEnteredFromRight(state){
        if(state.syntax !== '0')
        {
            state.syntax = state.syntax.slice(0, -1);
            if(+state.syntax === 0)
            {
                state.syntax = '0'
            }
        }

    },

}