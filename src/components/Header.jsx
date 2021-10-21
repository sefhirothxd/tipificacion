import React from 'react';
import { ReactComponent as Iconuser } from '../asset/icon/user.svg';

const Header = () => {
	return (
		<div className=" text-lg text-white flex justify-between items-center px-4 py-4 bg-azulEntel">
			<img
				src="https://www.entel.pe/wp-content/themes/entelperu/css/images/logo-entel.svg"
				alt="Logo Entel"
				className=""
			/>
			<div className="flex justify-center items-center">
				<Iconuser fill="white" width="15px" className="mr-2" />
				<h3>Admin</h3>
			</div>
		</div>
	);
};

export default Header;
