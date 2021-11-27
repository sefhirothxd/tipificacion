import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div className="mx-8 mt-4">
			<h1 className="text-2xl sm:text-4xl text-naranjaEntel font-barlow font-semibold mb-8">
				Panel Administrativo
			</h1>
			<div className="flex items-center gap-4 flex-wrap">
				<Link
					to="/dashboard/gestion_user"
					className="bg-azulEntel rounded-lg py-6 px-3 font-barlow w-80 cursor-pointer"
				>
					<h2 className="text-2xl text-white ">Gestion de Usuario</h2>
					<p className="text-sm text-white">Crea o modifica usuarios.</p>
				</Link>
				<Link
					to="/dashboard/gestion_base"
					className="bg-azulEntel rounded-lg py-6 px-3 font-barlow w-80 cursor-pointer"
				>
					<h2 className="text-2xl text-white ">Gestion de Base</h2>
					<p className="text-sm text-white ">cargar retenciones</p>
				</Link>
				<Link
					to="/dashboard/gestion_rol"
					className="bg-azulEntel rounded-lg py-6 px-3 font-barlow w-80 cursor-pointer"
				>
					<h2 className="text-2xl text-white ">Gestion de Roles</h2>
					<p className="text-sm text-white ">cargar retenciones</p>
				</Link>
				<Link
					to="/dashboard/reporte"
					className="bg-azulEntel rounded-lg py-6 px-3 font-barlow w-80 cursor-pointer"
				>
					<h2 className="text-2xl text-white ">Reporte</h2>
					<p className="text-sm text-white ">cargar retenciones</p>
				</Link>
				<Link
					to="/tipificar"
					className="bg-azulEntel rounded-lg py-6 px-3 font-barlow w-80 cursor-pointer"
				>
					<h2 className="text-2xl text-white ">Gestion de Llamadas</h2>
					<p className="text-sm text-white ">cargar retenciones</p>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
