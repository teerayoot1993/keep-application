import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    todo: todoReducer
})

export default rootReducer