import React, { useState } from 'react';
import { ReactComponent as Hamburger } from '../asset/icon/dashboard.svg';
import { ReactComponent as HamburgerX } from '../asset/icon/close.svg';
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
				className={`bg-azulEntel h-screen z-20 ${propiedad} transform w-80 tras absolute left-0 top-0 pt-16  transition-all duration-700 `}
			>
				<div>
					<HamburgerX
						fill="white"
						width="35px"
						height="35px"
						className={`absolute cursor-pointer z-30 top-20 left-4`}
						onClick={() => probando(!menu)}
					/>
					<div className="py-4 px-4 flex w-full flex-col justify-center item-center bg-naranjaEntel ">
						<img
							src={foto}
							alt="foto de perfil"
							className="rounded-full w-32 mx-auto"
						/>
						<p className="text-center text-white my-4 text-2xl font-barlow font-bold">
							Pedro castillo
						</p>
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
