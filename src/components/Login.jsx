import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Iconuser } from '../asset/icon/user.svg';
import { ReactComponent as IconPass } from '../asset/icon/lock.svg';
// import Iconuser from '../asset/icon/user.svg';
// import IconPass from '../asset/icon/lock.svg';

const login = () => {
	return (
		<div className="w-full bg-azulEntel min-h-screen flex justify-center items-center">
			<div className="mb-8 flex justify-center items-center mr-8">
				<img
					src="https://www.entel.pe/wp-content/themes/entelperu/css/images/logo-entel.svg"
					alt="Logo Entel"
					className="mr-2"
				/>
				<h1 className="text-3xl font-barlow font-semibold text-white">
					Sistema de tipificacion
				</h1>
			</div>
			<div className="  flex flex-col items-center">
				<div className="flex flex-col">
					<div className="flex justify-center items-center mb-6 border-b-2 border-white border-opacity-60 pl-2">
						<Iconuser fill="white" width="15px" className="mr-2" />
						<input
							className="py-1 px-1 outline-none border-none bg-azulEntel placeholder-white focus:text-white text-white"
							type="text"
							placeholder="Username"
						/>
					</div>
					<div className="flex justify-center items-center border-b-2 border-white border-opacity-60 pl-2">
						<IconPass fill="white" width="15px" className="mr-2" />
						<input
							className="py-1 px-1 outline-none border-none bg-azulEntel placeholder-white  focus:text-white text-white"
							type="password"
							placeholder="Password"
						/>
					</div>
					<Link
						to="/tipificar"
						className="flex justify-center outline-none focus:outline-none"
					>
						<button className="bg-naranjaEntel py-1 w-full px-2 text-center text-base font-bold rounded text-white mt-8 font-barlow outline-none focus:outline-none">
							INGRESAR
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default login;
