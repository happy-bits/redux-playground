import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adjustAmount, adjustAmountBy, addProduct, removeProduct } from './mylistSlice'

export function MyList() {

    const products = useSelector(state => state.mylist.products)
    const header = useSelector(state => state.mylist.header)

    function totalPrice() {
        let total = 0
        for (let p of products) {
            total += p.amount * p.price
        }
        return total
    }

    function totalWeight() {
        let total = 0
        for (let p of products) {
            total += p.amount * p.weight
        }
        return total
    }

    function totalNrOfProducts() {
        let total = 0
        for (let p of products) {
            total += p.amount
        }
        return total
    }

    function toNumber(str) {
        const num = parseFloat(str);
        return isNaN(num) ? 0 : num;
    }

    const handleAddProduct = () => {
        dispatch(addProduct({
            name: newProductName,
            price: toNumber(newProductPrice),
            weight: toNumber(newWeight)
        }));
        setNewProductName('');
        setNewProductPrice('');
    };

    const handleClear = () => {
        setNewProductName('');
        setNewProductPrice('');
    };

    const dispatch = useDispatch()

    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newWeight, setNewWeight] = useState('');

    return (
        <>
            <h1>{header}</h1>

            <div className="box mb-2">
                <label>
                    Produktnamn
                    <input
                        value={newProductName}
                        onChange={(e) => setNewProductName(e.target.value)}
                    />
                </label>
                <label>
                    Pris
                    <input
                        type="number"
                        value={newProductPrice}
                        onChange={(e) => setNewProductPrice(e.target.value)}
                    />
                </label>
                <label>
                    Vikt
                    <input
                        type="number"
                        value={newWeight}
                        onChange={(e) => setNewWeight(e.target.value)}
                    />
                </label>

                <button onClick={handleAddProduct}>Ok</button>
                <button onClick={handleClear}>Clear</button>
            </div>

            <div className="table">
                {products.map(p =>

                    <div key={p.id} className="row">
                        <div className="col">{p.name}</div>
                        <div className="col">{p.price}kr/st</div>
                        <div className="col">{p.weight}kg</div>
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

                        <button

                            onClick={e =>
                                dispatch(
                                    adjustAmountBy({ id: p.id, diff: +2 })
                                )}>
                            +2
                        </button>


                        <button

                            onClick={e =>
                                dispatch(
                                    adjustAmount({ id: p.id, amount: 0 })
                                )}>
                            Reset
                        </button>

                        <button

                            onClick={e =>
                                dispatch(
                                    removeProduct({ id: p.id })
                                )}>
                            Remove
                        </button>

                    </div>

                )}
            </div>

            <p>
                Sum: {totalPrice()}kr
            </p>
            <p>
                Sum weight: {totalWeight()}kg
            </p>
            <p>
                Nr of products: {totalNrOfProducts()}st
            </p>
        </>
    )
}