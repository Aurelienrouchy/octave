import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { useSelector } from 'react-redux';

import { AuthReducer } from "../provider/auth/auth.reducer";
import { AppReducer } from "../provider/app/app.reducer";

export const allReducers = combineReducers({
    auth: AuthReducer,
    app: AppReducer
});

export const useStore = store => useSelector( state => state[store]);

export const store = createStore(allReducers, applyMiddleware(thunk));
