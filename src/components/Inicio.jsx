import React from 'react';
import { Link } from 'react-router-dom';
const Inicio = () => {
	return (
		<div className="bg-gray-100 w-full content-container flex justify-center items-start">
			<div className="flex justify-center items-center   w-full">
				<div className="flex justify-center items-center h-full relative">
					<Link
						className="bg-naranjaEntel py-2 absolute top-80 px-4 text-center text-2xl font-bold rounded  text-white mb-4 md:my-8 font-barlow outline-none focus:outline-none"
						to="/tipificar/llamada"
					>
						Iniciar
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Inicio;
