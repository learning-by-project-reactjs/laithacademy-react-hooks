import { useContext } from "react"
import { CountContext } from "../Parent"

export default function Child5() {
    const count = useContext(CountContext)
    return (
        <div className='child-box-5'>
            <h1 className='box-header'>{count}</h1>
        </div>
    )
}
