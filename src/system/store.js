import { createStore,applyMiddleware } from 'redux'; // manage application state
import  rootReducer  from '../system/reducer';
import thunk from 'redux-thunk';
export default function configureStore(){
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
        )
}