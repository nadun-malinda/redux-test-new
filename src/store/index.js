import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decremnet(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter += action.payload
        },
        decrease(state, action) {
            state.counter -= action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions

export default store