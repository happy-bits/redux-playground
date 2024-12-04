import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, double, incrementByAmount, toggleBig } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const isBig = useSelector((state) => state.counter.isBig)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className={isBig ? "big" : ""}>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <button
                    onClick={() => dispatch(double())}
                >
                    Double
                </button>

                <button
                    onClick={() => dispatch(incrementByAmount(123))}
                >
                    Increment by 123
                </button>

                <button
                    onClick={() => dispatch(toggleBig())}
                >
                    Toggle big
                </button>
            </div>
        </div>
    )
}