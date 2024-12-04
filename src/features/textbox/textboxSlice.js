import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: "",
}

export const textboxSlice = createSlice({
    name: 'textbox',
    initialState,
    reducers: {
        setText: (state, action) => {
            console.log("hej")
            state.text = action.payload
        },
        clear: (state) => {
            state.text = ""
        }
    },
})

// Action creators are generated for each case reducer function
export const { setText, clear } = textboxSlice.actions

export default textboxSlice.reducer