import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div className="mx-8 mt-4">
			<h1 className="text-4xl text-naranjaEntel font-barlow font-semibold mb-8">
				Panel Administrativo
			</h1>
			<div className="flex items-center gap-4">
				<Link
					to="/dashboard/gestion_user"
					className="bg-azulEntel rounded-lg py-6 px-3 font-barlow w-80 cursor-pointer"
				>
					<h2 className="text-2xl text-white ">Gestion de Usuario</h2>
					<p className="text-sm text-white">
						Crea o modifica los datos de los usuarios.
					</p>
				</Link>
				<Link
					to="/dashboard/gestion_base"
					className="bg-azulEntel rounded-lg py-6 px-3 font-barlow w-80 cursor-pointer"
				>
					<h2 className="text-2xl text-white ">Gestion de base</h2>
					<p className="text-sm text-white ">cargar de las retenciones</p>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
