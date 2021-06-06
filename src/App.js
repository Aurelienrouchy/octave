import React from 'react';
import { Provider } from 'react-redux'
import { store } from './utils/store';

import Route from './routes';

import './App.scss';

function App() {
	return (
		<Provider store={ store }>
			<Route />
		</Provider>
	);
}

export default App;
