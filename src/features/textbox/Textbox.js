import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clear, setText } from './textboxSlice'

export function Textbox() {
    const text = useSelector((state) => state.textbox.text)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={e => dispatch(setText(e.target.value))}
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