import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    header: "This is my list",
    products: [

        { id: 1, name: "Ost", amount: 5, price: 7 },
        { id: 2, name: "Bröd", amount: 3, price: 12 },

    ]
}

export const mylistSlice = createSlice({
    name: 'mylist',
    initialState,
    reducers: {
    }
});

export default mylistSlice.reducer