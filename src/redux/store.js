import {legacy_createStore} from 'redux'
import rootReducer from './rootReducer'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { composeWithDevTools } from 'redux-devtools-extension'
// import cakeReducer from './cakes/cakeReducer'
// import {legacy_createStore} from 'redux'

const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))


export default store