import Child2 from './Child2'
import { useContext } from 'react'
import { CountContext } from '../Parent'

export default function Child1() {
    const count = useContext(CountContext)
    return (
        <div className='child-box-1'>
            <Child2 />
            <h1 className='box-header'>{count}</h1>
        </div>
    )
}
