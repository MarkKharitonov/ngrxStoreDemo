export const RESET_STATE = 'RESET_STATE';

const INIT = '__NOT_A_REAL_ACTION__';

export const reset = reducer => {
    let initialState = reducer(undefined, {type: INIT});
    return function (state, action) {
        //if reset action is fired, return initial state
        if (action.type === RESET_STATE) {
            return initialState;
        }
        //calculate next state based on action
        //noinspection UnnecessaryLocalVariableJS
        let nextState = reducer(state, action);
        //return nextState as normal when not reset action
        return nextState;
    }
};