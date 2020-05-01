const CHANGE_INTERVAL = 'CHANGE_INTERVAL'

let initialState = 1
// reducers
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_INTERVAL:
            return state += action.payload
        default:
            return state;
    }
}


// action creators
export const changeInterval = value => ({
    type: CHANGE_INTERVAL,
    payload: value,
})