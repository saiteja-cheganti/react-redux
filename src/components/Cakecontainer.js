import React from 'react'
import { connect } from 'react-redux'

import buyCake from '../redux/cakes/CakeAction'

function Cakecontainer(props) {
  return (
    <div>
        <h2> Number of Cake: {props.numberOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}


const mapStateToProps =(state)=>{
    return {
        numberOfCakes : state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch)=>{
     return {
        buyCake: () => dispatch(buyCake())
     }
}


export default connect(mapStateToProps,mapDispatchToProps)(Cakecontainer)