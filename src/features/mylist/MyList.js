import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adjustAmount, adjustAmountBy, addProduct } from './mylistSlice'

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

    function toNumber(str) {
        const num = parseFloat(str);
        return isNaN(num) ? 0 : num;
    }

    const dispatch = useDispatch()

    const newProductNameRef = React.createRef();
    const newProductPriceRef = React.createRef();

    return (
        <>
            <h1>{header}</h1>

            <div className="box mb-2">

                <label>
                    Produktnamn
                    <input ref={newProductNameRef} />
                </label>
                <label>
                    Pris
                    <input type="number" ref={newProductPriceRef} />
                </label>

                <button
                    onClick={e =>
                        dispatch(
                            addProduct({
                                name: newProductNameRef.current.value,
                                price: toNumber(newProductPriceRef.current.value)
                            })
                        )
                    }
                >Ok</button>

            </div>

            <div className="table">
                {products.map(p =>

                    <div key={p.id} className="row">
                        <div className="col">{p.name}</div>
                        <div className="col">{p.price}kr/st</div>
                        <div className="col">
                            <input

                                onChange={(e) => dispatch(

                                    adjustAmount({
                                        id: p.id,
                                        amount: toNumber(e.target.value)
                                    })

                                )}

                                value={p.amount} />
                        </div>
                        <button

                            onClick={e =>
                                dispatch(
                                    adjustAmountBy({ id: p.id, diff: -1 })
                                )}>
                            -1
                        </button>

                        <button

                            onClick={e =>
                                dispatch(
                                    adjustAmountBy({ id: p.id, diff: +1 })
                                )}>
                            +1
                        </button>

                    </div>

                )}
            </div>

            <p>
                Sum: {totalPrice()}kr
            </p>


        </>
    )
}