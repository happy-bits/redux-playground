import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import textboxReducer from '../features/textbox/textboxSlice'
import mylistReducer from '../features/mylist/mylistSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        textbox: textboxReducer,
        mylist: mylistReducer
    },
})