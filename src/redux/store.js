import {legacy_createStore} from 'redux'

import cakeReducer from './cakes/cakeReducer'
// import {legacy_createStore} from 'redux'

const store = legacy_createStore(cakeReducer)


export default store