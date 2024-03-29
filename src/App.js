import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Principal from './components/Principal';
import Error from './components/Error404';
import Dashboard from './components/admin/Dashboard';
import GestionUser from './components/admin/GestionUser';
import GestionBase from './components/admin/GestionBase';
import GestionRol from './components/admin/GestionRol';
import Reporte from './components/admin/Reporte';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Login />
				</Route>
				<Layout>
					<Route path="/tipificar" exact>
						<Inicio />
					</Route>
					<Route path="/tipificar/llamada" exact>
						<Principal />
					</Route>
					<Route path="/dashboard" exact>
						<Dashboard />
					</Route>
					<Route path="/dashboard/gestion_user" exact>
						<GestionUser />
					</Route>
					<Route path="/dashboard/gestion_base" exact>
						<GestionBase />
					</Route>
					<Route path="/dashboard/gestion_rol" exact>
						<GestionRol />
					</Route>
					<Route path="/dashboard/reporte" exact>
						<Reporte />
					</Route>
				</Layout>
				<Route>
					<Error />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
