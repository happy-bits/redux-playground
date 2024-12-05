import { useDispatch } from "react-redux"
import { adjustAmountBy } from "../features/mylist/mylistSlice"

export default function Page04() {

    const dispatch = useDispatch()

    return (
        <>
            <h1>Page 04</h1>

            <button

                onClick={() => {
                    dispatch(

                        adjustAmountBy({
                            id: 1,
                            diff: 1000
                        })

                    )
                }}
            >
                Add 1000 pieces to product with id=1
            </button>
        </>
    )
}