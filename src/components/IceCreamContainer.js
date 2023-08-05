import React from 'react'
import { connect } from 'react-redux'

import buyIcecream from '../redux/iceCreams/iceCreamAction'

function IceCreamContainer(props) {
  return (
    <div>
        <h2> Number of IceCreams: {props.numberOfIceCreams}</h2>
        <button onClick={props.buyIcecream}>Buy Cake</button>
    </div>
  )
}


const mapStateToProps =(state)=>{
        return {
            numberOfIceCreams : state.iceCream.numberOfIcecreams
        }
}

const mapDispatchToProps = (dispatch)=>{
     return {
        buyIcecream: () => dispatch(buyIcecream())
     }
}


export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)