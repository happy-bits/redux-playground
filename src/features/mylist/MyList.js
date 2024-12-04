import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

export function MyList() {

    return (
        <>
            <h1>My list</h1>

            <div className="row">
                <div className="col">Ost</div>
                <div className="col"><input /></div>
            </div>

            <div className="row">
                <div className="col">Bröd</div>
                <div className="col"><input /></div>
            </div>

            <p>
                Sum:
            </p>
        </>
    )
}