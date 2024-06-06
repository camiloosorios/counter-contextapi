
export type CounterActions =
{ type : 'increment' } |
{ type : 'decrement' } |
{ type : 'reset' };


export type CounterState = {
    value : number
}

export const initialState : CounterState = {
    value : 0
}

export const counterState = (state : CounterState, action : CounterActions) => {
    switch (action.type) {
        case 'increment':
            return {
                value : state.value + 1
            }
        case 'decrement':
            return {
                value : state.value - 1
            }
        case 'reset':
            return {
                initialState
            }
        default:
            return state;
    }
}