import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buyIcecream from '../redux/iceCreams/iceCreamAction'

function HookIceCreamContainer() {
    const numberOfIcecreams = useSelector(state => state.iceCream.numberOfIcecreams);
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of IceCreams -{numberOfIcecreams}</h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy Cake</button>
        </div>
    )
}

export default HookIceCreamContainer

