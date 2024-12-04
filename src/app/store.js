import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import textboxReducer from '../features/textbox/textboxSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        textbox: textboxReducer,
    },
})