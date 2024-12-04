import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

export function MyList() {

    const list = [

        { id: 1, name: "Ost", amount: 2, price: 7 },
        { id: 2, name: "Bröd", amount: 3, price: 12 },

    ]

    return (
        <>
            <h1>My list</h1>

            {list.map(p =>

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