import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import buyCake from '../redux/cakes/CakeAction'

function NewCakecontainer(props) {
   var [number, setNumber] = useState(1);
  return (
    <div>
        <h2> Number of Cake: {props.numberOfCakes}</h2>
        <input type='number' value={number} onChange={e=> setNumber(e.target.value)}/>
        <button onClick={()=>props.buyCake(number)}>Buy {number}Cake</button>
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
        buyCake: (number) => dispatch(buyCake(number))
     }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewCakecontainer)