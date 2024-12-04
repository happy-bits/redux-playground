import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: "",
}

export const textboxSlice = createSlice({
    name: 'textbox',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        },
        clear: (state) => {
            state.text = ""
        }
    },
})

export const { setText, clear } = textboxSlice.actions

export default textboxSlice.reducer