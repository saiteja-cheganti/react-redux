import {BUY_ICECREAM} from './iceCreamTypes'

const intialState = {
    numberOfIcecreams:20
}

const iceCreamReducer = (state = intialState, action)=>{
        switch(action.type){
            case BUY_ICECREAM: 
                return {
                    ...state,
                    numberOfIcecreams : state.numberOfIcecreams-1
                }
            default: return state
        }
}

export default iceCreamReducer