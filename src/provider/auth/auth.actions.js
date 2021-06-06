import { 
	LOGIN,
	LOGOUT,
	SET_LOADING,
} from './auth.type';
import { store } from '../../utils/store';


export const setLoadingAuth = loading => store.dispatch({
	type: SET_LOADING,
	payload: loading,
})

export const login = token => store.dispatch({
	type: LOGIN,
	payload: token
})

export const logout = () => store.dispatch({
	type: LOGOUT,
})


