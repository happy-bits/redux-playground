import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adjustAmount } from './mylistSlice'

export function MyList() {

    const products = useSelector(state => state.mylist.products)
    const header = useSelector(state => state.mylist.header)
    // const totalPrice = useSelector(selectTotalPrice);

    function totalPrice() {
        let total = 0
        for (let p of products) {
            total += p.amount * p.price
        }
        return total
    }

    const dispatch = useDispatch()

    return (
        <>
            <h1>{header}</h1>

            <div className="table">
                {products.map(p =>

                    <div key={p.id} className="row">
                        <div className="col">{p.name}</div>
                        <div className="col">{p.price}kr/st</div>
                        <div className="col"><input onChange={(e) => dispatch(adjustAmount({ id: p.id, amount: e.target.value }))} value={p.amount} /></div>
                    </div>

                )}
            </div>

            <p>
                Sum: {totalPrice()}kr
            </p>
        </>
    )
}