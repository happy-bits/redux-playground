import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    isBig: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },

        double: (state) => {
            state.value *= 2
        },

        toggleBig: (state) => {
            state.isBig = !state.isBig
        },
        set: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount, double, toggleBig, set } = counterSlice.actions

export default counterSlice.reducer