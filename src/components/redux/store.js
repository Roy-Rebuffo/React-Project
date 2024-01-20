import authReducer from './reducers/auth.reducer';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    auth: authReducer,
    //city: cityReducer, (en caso de que tenga otros datos en mi store)
})

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
