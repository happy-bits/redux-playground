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
        adjustAmount: (state, action) => {

            for (let row of state.products) {
                if (row.id === action.payload.id) {
                    row.amount = action.payload.amount
                }
            }
        },

        adjustAmountBy: (state, action) => {
            for (let row of state.products) {
                if (row.id === action.payload.id) {
                    row.amount += action.payload.diff
                }
            }

        },

        addProduct: (state, action) => {
            action.payload.amount = 0;
            action.payload.id = Math.max(0, ...state.products.map(product => product.id)) + 1;
            state.products.push(action.payload)

        }
    }
});

export const { adjustAmount, adjustAmountBy, addProduct } = mylistSlice.actions
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