import React from 'react'
import { useSelector } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'

export function MyList() {

    const products = useSelector(state => state.mylist.products)
    const header = useSelector(state => state.mylist.header)

    return (
        <>
            <h1>{header}</h1>

            {products.map(p =>

                <div key={p.id} className="row">
                    <div className="col">{p.name}</div>
                    <div className="col"><input value={p.amount} /></div>
                    {/* Ger varning */}
                </div>

            )}

            <p>
                Sum:
            </p>
        </>
    )
}