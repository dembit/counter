const INSTALL = "INSTALL";

const createStore = (reducer, initialState) => {
    let currentState = initialState
    const listeners = []

    const getState = () => currentState
    const dispatch = action => {
        currentState = reducer(currentState, action)
        listeners.forEach(listener => listener())
    }

    const subscribe = listener => {
        return listeners.push(listener)
    }

    dispatch({type: INSTALL})

    return { getState, dispatch, subscribe }
}


export default createStore;