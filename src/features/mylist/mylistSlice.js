import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    header: "This is my list",
    products: [

        { id: 1, name: "Ost", amount: 5, price: 7, weight: 1.2 },
        { id: 2, name: "Bröd", amount: 3, price: 12, weight: 0.7 },
        { id: 3, name: "Mjöl", amount: 4, price: 18, weight: 1.0 },
        { id: 4, name: "Apelsin", amount: 20, price: 3, weight: 0.2 },

    ]

}



export const mylistSlice = createSlice({
    name: 'mylist',
    initialState,
    reducers: {
        adjustAmount: (state, action) => {


            // action.payload = {id: 2, amount: 50}

            for (let row of state.products) {
                if (row.id === action.payload.id) {
                    row.amount = Math.max(0, action.payload.amount)
                }
            }
        },

        adjustAmountBy: (state, action) => {
            for (let row of state.products) {
                if (row.id === action.payload.id) {
                    row.amount += action.payload.diff
                    row.amount = Math.max(0, row.amount)
                }
            }

        },

        addProduct: (state, action) => {
            action.payload.amount = 0;
            action.payload.price = Math.max(0, action.payload.price)
            action.payload.weight = Math.max(0, action.payload.weight)
            action.payload.id = Math.max(0, ...state.products.map(product => product.id)) + 1;
            state.products.push(action.payload)
        },

        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload.id)
        },

        allAmountsToZero: (state) => {
            for (let row of state.products) {
                row.amount = 0
            }
        }
    }
});

export const { adjustAmount, adjustAmountBy, addProduct, removeProduct, allAmountsToZero } = mylistSlice.actions
/*

Alternativ med "createSelector"

 export const selectTotalPrice = createSelector(
    (state) => state.mylist.products,
    (products) =>
    products.reduce((total, product) => total + product.amount * product.price, 0) // Summera produkterna

    );
*/

/*

Samma men utan "reduce"

export const selectTotalPrice = createSelector(
    state => state.mylist.products, // anger input till nästa parameter
    products => {
        let total = 0
        for (let p of products) {
            total += p.amount * p.price
        }
        return total
    }
);

*/

export default mylistSlice.reducer