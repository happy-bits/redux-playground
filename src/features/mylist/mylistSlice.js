import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    header: "This is my list",
    products: [

        { id: 1, name: "Ost", amount: 5, price: 7 },
        { id: 2, name: "Bröd", amount: 3, price: 12 },

    ]

}

function stringToNumber(str) {
    const num = parseFloat(str);
    return isNaN(num) ? 0 : num;
}

export const mylistSlice = createSlice({
    name: 'mylist',
    initialState,
    reducers: {
        adjustAmount: (state, action) => {

            console.log(action.payload)

            for (let row of state.products) {
                if (row.id === action.payload.id) {


                    row.amount = stringToNumber(action.payload.amount)

                }
            }
        }
    }
});

export const { adjustAmount } = mylistSlice.actions

// export const selectTotalPrice = createSelector(
//     (state) => state.mylist.products,
//     (products) =>
//         products.reduce((total, product) => total + product.amount * product.price, 0) // Summera produkterna
// );

// export const selectTotalPrice = createSelector(
//     state => state.mylist.products, // anger input till nästa parameter
//     products => {
//         let total = 0
//         for (let p of products) {
//             total += p.amount * p.price
//         }
//         return total
//     }
// );

// return 123


export default mylistSlice.reducer