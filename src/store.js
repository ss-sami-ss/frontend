import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';

const initialState={};
const reducer=combineReducers({
    productList:productListReducer,
})

const composeEnhandcer=window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store=createStore(reducer,initialState,compose(applyMiddleware(thunk)));

export default store;