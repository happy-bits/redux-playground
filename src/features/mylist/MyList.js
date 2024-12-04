import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adjustAmount, selectTotalPrice } from './mylistSlice'

export function MyList() {

    const products = useSelector(state => state.mylist.products)
    const header = useSelector(state => state.mylist.header)
    const totalPrice = useSelector(selectTotalPrice);

    const dispatch = useDispatch()

    return (
        <>
            <h1>{header}</h1>

            {products.map(p =>

                <div key={p.id} className="row">
                    <div className="col">{p.name}</div>
                    <div className="col">{p.price}kr/st</div>
                    <div className="col"><input onChange={(e) => dispatch(adjustAmount({ id: p.id, amount: e.target.value }))} value={p.amount} /></div>
                    {/* Ger varning */}
                </div>

            )}

            <p>
                Sum: {totalPrice}kr
            </p>
        </>
    )
}