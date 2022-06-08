import { combineReducers, legacy_createStore as createStore } from "redux";
import HeaderSearch from './headerSearch'

let reducers = combineReducers({
    header: HeaderSearch,
});

let Store = createStore(reducers);


export default Store;



