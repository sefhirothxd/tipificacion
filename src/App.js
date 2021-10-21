import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Principal from './components/Principal';
import Error from './components/Error404';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Login />
				</Route>
				<Route path="/tipificar" exact>
					<Principal />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
