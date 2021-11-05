import React, { useState } from 'react';
import { ReactComponent as Hamburger } from '../asset/icon/dashboard.svg';
import { ReactComponent as HamburgerX } from '../asset/icon/close.svg';
import { ReactComponent as CerrarSesion } from '../asset/icon/cerrarSesion.svg';
import foto from '../asset/img/foto-perfil.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
	const [menu, setMenu] = useState(false);
	const [propiedad, setPropiedad] = useState('-translate-x-96');

	const probando = (data) => {
		console.log(data);
		if (data === false) {
			setPropiedad('-translate-x-96');
			setMenu(false);
		} else {
			setPropiedad('translate-x-0');
			setMenu(true);
		}
	};
	return (
		<div
			className={`bg-azulEntel text-white w-full py-4 px-4 relative flex items-center justify-between`}
		>
			<div
				className={`bg-azulEntel h-screen z-20 ${propiedad} transform w-80 tras absolute left-0 top-0 pt-16  transition-all duration-500 flex flex-col justify-between`}
			>
				<div className="border-white border-t-2 ">
					<HamburgerX
						fill="white"
						width="35px"
						height="35px"
						className={`absolute cursor-pointer z-30 top-20 left-4`}
						onClick={() => probando(!menu)}
					/>
					<div className="py-4 px-4 flex w-full flex-col justify-center font-barlow item-center bg-naranjaEntel border-b-4 border-white mb-8 ">
						<img
							src={foto}
							alt="foto de perfil"
							className="rounded-full w-32 mx-auto"
						/>
						<p className="text-center text-white mt-4 text-2xl font-barlow font-bold">
							Pedro castillo
						</p>
						<span className="text-center mb-4">Administrador</span>
					</div>
					<div>
						<Link
							to="/dashboard"
							className="   cursor-pointer "
							onClick={() => probando(!menu)}
						>
							<p className="mx-4 px-2 py-2  hover:text-azulEntel font-barlow text-lg   hover:bg-gray-50">
								Panel Administrativo
							</p>
						</Link>
						<Link
							to="/dashboard/gestion_user"
							className="cursor-pointer"
							onClick={() => probando(!menu)}
						>
							<p className="mx-4 px-2 py-2  hover:text-azulEntel font-barlow text-lg   hover:bg-gray-50">
								Gestion de Usuarios
							</p>
						</Link>
						<Link
							to="/dashboard/gestion_base"
							className="cursor-pointer"
							onClick={() => probando(!menu)}
						>
							<p className="mx-4 px-2 py-2  hover:text-azulEntel font-barlow text-lg   hover:bg-gray-50">
								Gestion de Base
							</p>
						</Link>
						<Link
							to="/tipificar"
							className="cursor-pointer"
							onClick={() => probando(!menu)}
						>
							<p className="mx-4 px-2 py-2  hover:text-azulEntel font-barlow text-lg   hover:bg-gray-50">
								Gestion de Llamadas
							</p>
						</Link>
					</div>
				</div>
				<Link
					to="/"
					className="flex justify-start hover:bg-gray-50 items-center pb-2 pl-5"
				>
					<CerrarSesion
						width="25px"
						className="text-naranjaEntel"
						height="25px"
					/>
					<button className="text-naranjaEntel font-barlow text-2xl w-40">
						Cerrar Session
					</button>
				</Link>
			</div>
			<div className="flex justify-start items-center relative py-4  mr-10">
				<Hamburger
					fill="white"
					width="35px"
					height="35px"
					className="mr-2 cursor-pointer absolute top-0"
					onClick={() => probando(!menu)}
				/>
			</div>
			<img
				src="https://www.entel.pe/wp-content/themes/entelperu/css/images/logo-entel.svg"
				alt="Logo Entel"
				className=" ml-4"
			/>
		</div>
	);
};

export default Header;
