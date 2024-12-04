import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clear, setText } from './textboxSlice'
import { set } from '../counter/counterSlice'

export function Textbox() {
    const text = useSelector((state) => state.textbox.text)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(setText(e.target.value))

        if (e.target.value === "tusen") {
            dispatch(set(1000))
        }
    }
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                />
                <button
                    onClick={() => dispatch(clear())}
                >
                    Clear
                </button>
                {text}
            </div>
        </div>
    )
}